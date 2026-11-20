/* ==========================================================================
   Componente Reutilizable: Botones de Acción y Decisión
   (<blinky-action-button> y <blinky-button-group>)
   Estilo visual unificado, compacto y responsive, con iconos vectoriales
   nítidos y guías de teclado visibles únicamente durante el tutorial inicial.
   ========================================================================== */

(function () {
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderTutorialBadge(tutorialHint) {
    if (!tutorialHint) return '';
    if (tutorialHint === 'enter') {
      return `
        <span class="vn-tutorial-key hidden md:inline-flex" title="También puedes presionar la tecla Enter">
          <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 10 4 15 9 20"></polyline>
            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
          </svg>
          <span>Enter</span>
        </span>
      `;
    }
    return `
      <span class="vn-tutorial-key hidden md:inline-flex" title="También puedes presionar la tecla ${escapeHtml(tutorialHint)}">
        <span>Tecla ${escapeHtml(tutorialHint)}</span>
      </span>
    `;
  }

  class BlinkyActionButton extends HTMLElement {
    connectedCallback() {
      if (!this._rendered) {
        this.render({
          label: this.getAttribute('label') || this.textContent.trim() || 'Continuar',
          tutorialHint: this.getAttribute('tutorial-hint') || '',
          next: this.getAttribute('next') || '',
          isRestart: this.hasAttribute('is-restart')
        });
      }
    }

    render(props = {}) {
      this._rendered = true;
      this._props = props;
      const {
        label = '',
        tutorialHint = '',
        isRestart = false
      } = props;

      const actionIconSvg = isRestart
        ? `<svg class="w-3.5 h-3.5 text-stone-200 group-hover:text-amber-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path>
            <polyline points="3 3 3 8 8 8"></polyline>
          </svg>`
        : `<svg class="w-3.5 h-3.5 text-stone-200 group-hover:text-amber-200 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>`;

      this.className = 'block w-full';
      this.innerHTML = `
        <button
          type="button"
          class="vn-btn group w-full flex items-center justify-between gap-3 rounded-xl shadow-[0_3px_12px_rgba(0,0,0,0.38)] text-left font-narrative font-medium cursor-pointer"
        >
          <span class="leading-snug">${escapeHtml(label)}</span>

          <span class="flex items-center gap-2 shrink-0">
            ${renderTutorialBadge(tutorialHint)}
            <span class="vn-btn-chevron-wrap inline-flex items-center justify-center rounded-full bg-white/10">
              ${actionIconSvg}
            </span>
          </span>
        </button>
      `;

      const btn = this.querySelector('button');
      if (btn) {
        btn.addEventListener('mouseenter', () => {
          this.dispatchEvent(
            new CustomEvent('blinky:btn-hover', {
              bubbles: true,
              composed: true,
              detail: props
            })
          );
        });

        btn.addEventListener('click', () => {
          this.dispatchEvent(
            new CustomEvent('blinky:choose', {
              bubbles: true,
              composed: true,
              detail: props
            })
          );
        });
      }
    }
  }

  class BlinkyButtonGroup extends HTMLElement {
    connectedCallback() {
      if (!this._rendered) {
        const raw = this.getAttribute('choices');
        if (raw) {
          try {
            this.render({
              choices: JSON.parse(raw),
              showTutorialHints: this.hasAttribute('show-tutorial-hints')
            });
          } catch (e) {
            this.render({ choices: [] });
          }
        }
      }
    }

    render({ choices = [], showTutorialHints = false } = {}) {
      this._rendered = true;
      this.className = 'flex flex-col gap-2 w-full';
      this.innerHTML = '';

      choices.forEach((choice, idx) => {
        const el = document.createElement('blinky-action-button');
        const tutorialHint = showTutorialHints
          ? (choices.length > 1 ? String(idx + 1) : 'enter')
          : '';
        el.render({
          ...choice,
          index: idx,
          tutorialHint
        });
        this.appendChild(el);
      });
    }
  }

  if (!customElements.get('blinky-action-button')) {
    customElements.define('blinky-action-button', BlinkyActionButton);
  }
  if (!customElements.get('blinky-button-group')) {
    customElements.define('blinky-button-group', BlinkyButtonGroup);
  }

  window.BlinkyActionButtons = {
    ButtonComponent: BlinkyActionButton,
    GroupComponent: BlinkyButtonGroup
  };
})();
