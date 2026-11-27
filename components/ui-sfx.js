/* ==========================================================================
   Motor Compartido de Sonidos de Interfaz — Blinky's Blind Heart
   Síntesis acústica cálida estilo videojuego indie (hover, clic, switch, tabs)
   ========================================================================== */

(function () {
  let ctx = null;
  let enabled = true;
  let volume = 0.6;
  let lastHoverTs = 0;

  function ensureContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  // Desbloquea el AudioContext con la primera interacción del usuario
  function unlock() {
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }
  window.addEventListener('pointerdown', unlock, { passive: true });
  window.addEventListener('keydown', unlock, { passive: true });

  function effectiveVol() {
    return Math.max(0.08, Math.min(1, Number(volume) || 0.6));
  }

  /**
   * Sonido suave de hover: toque cálido de madera/fieltro + armónico ligero,
   * sutil pero claramente perceptible al recorrer cualquier botón o ícono.
   */
  function playHover() {
    if (!enabled) return;
    const nowMs = performance.now();
    if (nowMs - lastHoverTs < 48) return;
    lastHoverTs = nowMs;

    const ac = ensureContext();
    if (!ac || ac.state === 'suspended') return;

    const t0 = ac.currentTime;
    const v = effectiveVol();

    // Tono principal cálido (ligera variación orgánica para que no suene mecánico)
    const baseFreq = 500 + (Math.random() - 0.5) * 24;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, t0);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.24, t0 + 0.055);

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(0.085 * v, t0 + 0.009);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.075);

    // Armónico cristalino muy suave
    const overtone = ac.createOscillator();
    const ovGain = ac.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(baseFreq * 2.02, t0);
    ovGain.gain.setValueAtTime(0.0001, t0);
    ovGain.gain.linearRampToValueAtTime(0.022 * v, t0 + 0.006);
    ovGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.045);

    osc.connect(gain);
    gain.connect(ac.destination);
    overtone.connect(ovGain);
    ovGain.connect(ac.destination);

    osc.start(t0);
    osc.stop(t0 + 0.082);
    overtone.start(t0);
    overtone.stop(t0 + 0.052);
  }

  /**
   * Sonido de clic / confirmación: pulso cálido con cuerpo y cola suave.
   */
  function playClick() {
    if (!enabled) return;
    const ac = ensureContext();
    if (!ac) return;

    const t0 = ac.currentTime;
    const v = effectiveVol();

    // Cuerpo cálido ascendente
    const osc1 = ac.createOscillator();
    const g1 = ac.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(340, t0);
    osc1.frequency.exponentialRampToValueAtTime(510, t0 + 0.065);
    g1.gain.setValueAtTime(0.0001, t0);
    g1.gain.linearRampToValueAtTime(0.125 * v, t0 + 0.006);
    g1.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.115);

    // Brillo suave de confirmación
    const osc2 = ac.createOscillator();
    const g2 = ac.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(680, t0 + 0.015);
    osc2.frequency.exponentialRampToValueAtTime(860, t0 + 0.09);
    g2.gain.setValueAtTime(0.0001, t0 + 0.015);
    g2.gain.linearRampToValueAtTime(0.048 * v, t0 + 0.026);
    g2.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);

    osc1.connect(g1);
    g1.connect(ac.destination);
    osc2.connect(g2);
    g2.connect(ac.destination);

    osc1.start(t0);
    osc1.stop(t0 + 0.125);
    osc2.start(t0 + 0.015);
    osc2.stop(t0 + 0.13);
  }

  /**
   * Sonido táctil para switches (ascendente al activar, descendente suave al desactivar).
   */
  function playToggle(isOn) {
    if (!enabled) return;
    const ac = ensureContext();
    if (!ac) return;

    const t0 = ac.currentTime;
    const v = effectiveVol();

    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';

    if (isOn) {
      osc.frequency.setValueAtTime(380, t0);
      osc.frequency.exponentialRampToValueAtTime(610, t0 + 0.075);
    } else {
      osc.frequency.setValueAtTime(480, t0);
      osc.frequency.exponentialRampToValueAtTime(300, t0 + 0.075);
    }

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(0.11 * v, t0 + 0.007);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.095);

    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + 0.105);
  }

  /**
   * Cambio de pestaña (tab): deslizamiento breve y cristalino.
   */
  function playTab() {
    if (!enabled) return;
    const ac = ensureContext();
    if (!ac) return;

    const t0 = ac.currentTime;
    const v = effectiveVol();

    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(560, t0);
    osc.frequency.exponentialRampToValueAtTime(690, t0 + 0.045);

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(0.08 * v, t0 + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.068);

    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + 0.075);
  }

  /**
   * Apertura / cierre suave de menú o ventana modal.
   */
  function playMenu(isOpen) {
    if (!enabled) return;
    const ac = ensureContext();
    if (!ac) return;

    const t0 = ac.currentTime;
    const v = effectiveVol();

    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(isOpen ? 260 : 340, t0);
    osc.frequency.exponentialRampToValueAtTime(isOpen ? 390 : 220, t0 + 0.09);

    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(0.075 * v, t0 + 0.014);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.115);

    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + 0.125);
  }

  /**
   * Acorde cálido de inicio al pulsar Play en la portada.
   */
  function playStartChord() {
    if (!enabled) return;
    const ac = ensureContext();
    if (!ac) return;

    const t0 = ac.currentTime;
    const v = effectiveVol();
    const notes = [293.66, 440.0, 587.33]; // D4 - A4 - D5 abierto y cálido

    notes.forEach((freq, idx) => {
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      const start = t0 + idx * 0.035;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime((0.085 - idx * 0.015) * v, start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.55);

      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(start);
      osc.stop(start + 0.58);
    });
  }

  /**
   * Delega sonidos de hover en todos los controles interactivos del documento
   * evitando duplicados cuando el cursor se mueve dentro del mismo elemento.
   */
  function attachHoverDelegation(selector = 'button:not(:disabled), a[href], [role="switch"], [role="tab"]') {
    let currentHovered = null;

    document.addEventListener('pointerover', (e) => {
      const target = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (!target || target === currentHovered) return;
      // Evita duplicar sonido con botones de diálogo que ya emiten blinky:btn-hover
      if (target.closest('blinky-action-button')) {
        currentHovered = target;
        return;
      }
      currentHovered = target;
      playHover();
    }, { passive: true });

    document.addEventListener('pointerout', (e) => {
      if (!currentHovered) return;
      const related = e.relatedTarget;
      if (!related || !currentHovered.contains(related)) {
        currentHovered = null;
      }
    }, { passive: true });
  }

  window.BlinkyUiSfx = {
    configure(opts = {}) {
      if (typeof opts.enabled === 'boolean') enabled = opts.enabled;
      if (typeof opts.volume === 'number') volume = opts.volume;
    },
    playHover,
    playClick,
    playToggle,
    playTab,
    playMenu,
    playStartChord,
    attachHoverDelegation
  };
})();
