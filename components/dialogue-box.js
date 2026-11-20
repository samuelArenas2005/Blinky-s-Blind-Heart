/* ==========================================================================
   Componente Reutilizable: Recuadro de Diálogo (<blinky-dialogue-box>)
   Arquitectura modular estilo React basada en Web Components nativos.
   Estética limpia, unificada y compacta orientada al jugador final.
   ========================================================================== */

(function () {
  // Clasificación semántica de los personajes / voces de la historia
  const SPEAKER_PROFILES = {
    narrador: {
      label: 'Narrador',
      role: 'Voz narrativa y descripción sensorial del entorno'
    },
    blinky: {
      label: 'Blinky',
      role: 'Sensaciones internas, instinto y memoria del gatito'
    },
    mama_gato: {
      label: 'Mamá Gato',
      role: 'Afecto materno, ronroneo y resguardo'
    },
    gato_guia: {
      label: 'Gato Guía',
      role: 'Mentor felino callejero'
    },
    perro_salvador: {
      label: 'Perro Salvador',
      role: 'Protector canino de paso firme'
    },
    nina: {
      label: 'La Niña',
      role: 'Sofía, aliada invidente y nueva familia'
    },
    mama_nina: {
      label: 'Mamá de la Niña',
      role: 'Figura de rescate, compasión y adopción'
    }
  };

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  class BlinkyDialogueBox extends HTMLElement {
    constructor() {
      super();
      this._typeTimer = null;
      this._isTyping = false;
      this._fullMarkup = '';
      this._props = {
        speaker: 'NARRADOR',
        speakerType: 'narrador',
        text: '',
        html: '',
        audioCue: '',
        showSubtitles: false,
        choices: [],
        showTutorialHints: false,
        canGoBack: false,
        showSurveyAction: false,
        typewriter: false
      };
    }

    stopTypewriter(completeNow = false) {
      if (this._typeTimer) {
        clearTimeout(this._typeTimer);
        this._typeTimer = null;
      }
      if (completeNow && this._isTyping) {
        const p = this.querySelector('[data-slot="narrative-text"]');
        if (p) p.innerHTML = this._fullMarkup;
      }
      this._isTyping = false;
    }

    isTyping() {
      return this._isTyping;
    }

    _startTypewriter(targetEl, fullMarkup, plainText) {
      this.stopTypewriter(false);
      this._fullMarkup = fullMarkup;
      this._isTyping = true;
      targetEl.textContent = '';

      const chars = Array.from(plainText);
      let idx = 0;
      let tickCounter = 0;

      const step = () => {
        if (!this._isTyping) return;
        idx += 1;
        const slice = chars.slice(0, idx).join('');
        targetEl.innerHTML = escapeHtml(slice).replace(/\n/g, '<br>');

        const ch = chars[idx - 1];
        if (ch && ch.trim() !== '') {
          tickCounter += 1;
          // Emitimos sonido cada 2 caracteres visibles para un ritmo suave y natural
          if (tickCounter % 2 === 1) {
            this.dispatchEvent(
              new CustomEvent('blinky:type-tick', {
                bubbles: true,
                composed: true,
                detail: { char: ch }
              })
            );
          }
        }

        if (idx >= chars.length) {
          this._isTyping = false;
          this._typeTimer = null;
          // Al completar, aplicamos el HTML enriquecido final (cursivas/negritas)
          targetEl.innerHTML = fullMarkup;
          return;
        }

        let delay = 22;
        if (ch === '.' || ch === '!' || ch === '?' || ch === '…') delay = 115;
        else if (ch === ',' || ch === ';' || ch === ':' || ch === '—') delay = 68;
        else if (ch === ' ') delay = 14;

        this._typeTimer = setTimeout(step, delay);
      };

      this._typeTimer = setTimeout(step, 40);
    }

    connectedCallback() {
      if (!this._initializedByProps) {
        const speaker = this.getAttribute('speaker');
        if (speaker) {
          this.render({
            speaker: speaker,
            speakerType: this.getAttribute('speaker-type') || 'narrador',
            text: this.getAttribute('text') || '',
            html: this.getAttribute('html') || '',
            audioCue: this.getAttribute('audio-cue') || '',
            showSubtitles: this.hasAttribute('show-subtitles'),
            showTutorialHints: this.hasAttribute('show-tutorial-hints'),
            canGoBack: this.hasAttribute('can-go-back'),
            choices: this._parseChoicesAttr()
          });
        }
      }
    }

    _parseChoicesAttr() {
      const raw = this.getAttribute('choices');
      if (!raw) return [];
      try {
        return JSON.parse(raw);
      } catch (e) {
        return [];
      }
    }

    /**
     * Renderiza el recuadro de diálogo compacto y limpio para el jugador.
     */
    render(nextProps = {}) {
      this.stopTypewriter(false);
      this._initializedByProps = true;
      this._props = { ...this._props, ...nextProps };

      const {
        speaker,
        speakerType,
        text,
        html,
        audioCue,
        showSubtitles,
        choices,
        showTutorialHints,
        canGoBack,
        showSurveyAction,
        typewriter
      } = this._props;

      const bodyMarkup = html || escapeHtml(text).replace(/\n/g, '<br>');
      this._fullMarkup = bodyMarkup;

      this.innerHTML = `
        <div class="vn-dialogue-shell relative">
          <!-- Pestaña superior de personaje / narrador (sin puntos de color ni etiquetas debug) -->
          <div
            class="vn-nameplate absolute z-20 bg-[#1E2733] text-white rounded-t-xl border-t border-x border-white/20 shadow-[0_-2px_10px_rgba(0,0,0,0.4)]"
            data-purpose="speaker-nameplate"
            data-speaker-type="${escapeHtml(speakerType)}"
          >
            <span class="vn-nameplate-text font-ui font-semibold uppercase block leading-none">
              ${escapeHtml(speaker)}
            </span>
          </div>

          <!-- Tarjeta narrativa principal -->
          <div
            class="vn-dialogue-card relative bg-[#0D131A]/86 backdrop-blur-md border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.68)]"
            data-purpose="dialogue-card"
            role="region"
            aria-live="polite"
            aria-label="Diálogo de ${escapeHtml(speaker)}"
          >
            <!-- Línea superior luminosa sutil -->
            <div class="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            ${
              showSubtitles && audioCue
                ? `<div class="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-ui text-slate-300">
                    <svg class="w-3 h-3 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                    <span>${escapeHtml(audioCue)}</span>
                  </div>`
                : ''
            }

            <!-- Cuerpo del texto narrativo -->
            <div class="vn-text-area flex items-start" data-action="skip-typewriter">
              <p data-slot="narrative-text" class="font-narrative vn-narrative-text text-[#F1F5F9] font-normal tracking-[0.01em] ${typewriter ? '' : 'text-reveal'}">
                ${typewriter ? '' : bodyMarkup}
              </p>
            </div>

            <!-- Botones de acción / decisión + Volver -->
            <div class="vn-actions-area border-t border-white/10 flex flex-col">
              <blinky-button-group data-slot="choices"></blinky-button-group>

              <div class="vn-footer-bar flex items-center justify-between gap-2 border-t border-white/10">
                <button
                  type="button"
                  data-action="go-back"
                  ${canGoBack ? '' : 'disabled'}
                  aria-label="${canGoBack ? 'Volver a la escena anterior' : 'Volver a la escena anterior (inicio de la historia)'}"
                  class="vn-back-btn flex items-center gap-1.5 text-[11px] font-ui px-1.5 py-0.5 rounded-md transition-colors ${
                    canGoBack
                      ? 'text-[#94A3B8] hover:text-amber-200 cursor-pointer'
                      : 'text-[#94A3B8]/40 cursor-not-allowed select-none'
                  }"
                >
                  <span aria-hidden="true">←</span>
                  <span>Volver a la escena anterior</span>
                </button>

                ${
                  showSurveyAction
                    ? `<button
                        type="button"
                        data-action="open-survey"
                        class="vn-back-btn text-[11px] font-ui px-2.5 py-1 rounded-lg border border-white/15 bg-white/5 text-stone-200 hover:border-amber-300/45 hover:text-amber-200 transition-colors cursor-pointer"
                      >
                        Compartir impresiones
                      </button>`
                    : ''
                }
              </div>
            </div>
          </div>
        </div>
      `;

      // Iniciar efecto máquina de escribir si está activado
      if (typewriter) {
        const textEl = this.querySelector('[data-slot="narrative-text"]');
        if (textEl) {
          this._startTypewriter(textEl, bodyMarkup, text);
        }
        const skipZone = this.querySelector('[data-action="skip-typewriter"]');
        if (skipZone) {
          skipZone.addEventListener('click', () => {
            if (this._isTyping) this.stopTypewriter(true);
          });
        }
      }

      // Montamos las opciones dentro del componente <blinky-button-group>
      const buttonGroup = this.querySelector('blinky-button-group');
      if (buttonGroup && typeof buttonGroup.render === 'function') {
        buttonGroup.render({ choices, showTutorialHints });
      }

      // Botón volver
      const backBtn = this.querySelector('[data-action="go-back"]');
      if (backBtn && canGoBack) {
        backBtn.addEventListener('click', () => {
          this.dispatchEvent(
            new CustomEvent('blinky:back', { bubbles: true, composed: true })
          );
        });
      }

      // Encuesta opcional al final
      const surveyBtn = this.querySelector('[data-action="open-survey"]');
      if (surveyBtn) {
        surveyBtn.addEventListener('click', () => {
          this.dispatchEvent(
            new CustomEvent('blinky:survey', { bubbles: true, composed: true })
          );
        });
      }
    }
  }

  if (!customElements.get('blinky-dialogue-box')) {
    customElements.define('blinky-dialogue-box', BlinkyDialogueBox);
  }

  window.BlinkyDialogueBox = {
    SPEAKER_PROFILES,
    Component: BlinkyDialogueBox
  };
})();
