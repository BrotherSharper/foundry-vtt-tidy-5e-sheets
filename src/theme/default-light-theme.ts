import type { Tidy5eTheme } from 'src/types/theme';

export const defaultLightTheme: Tidy5eTheme = {
  name: 'light',
  version: 1,
  id: 'tidy5e-kgar-default-light',
  description: 'The default Tidy 5e Light theme',
  variables: {
    '--t5ek-modesto': "'Modesto Condensed', 'Palatino Linotype', serif",
    '--t5ek-signika': "'Signika', sans-serif",
    '--t5ek-primary-font': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-background': 'rgba(236, 233, 223, 1)',
    '--t5ek-faintest-color': 'rgba(0, 0, 0, 0.05)',
    '--t5ek-faint-color': 'rgba(0, 0, 0, 0.1)',
    '--t5ek-light-color': 'rgba(0, 0, 0, 0.25)',
    '--t5ek-primary-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-secondary-color': 'rgba(0, 0, 0, 0.65)',
    '--t5ek-tertiary-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-primary-accent': 'rgba(255, 100, 0, 1)',
    '--t5ek-white': 'rgba(255, 255, 255, 1)',
    '--t5ek-faint-white': 'rgba(255, 255, 255, 0.2)',
    '--t5ek-linked-accent': 'rgba(0, 255, 0, 0.75)',
    '--t5ek-unlinked-accent': 'rgba(255, 0, 0, 0.75)',
    '--t5ek-linked-light': 'rgba(0, 255, 0, 0.4)',
    '--t5ek-unlinked-light': 'rgba(255, 0, 0, 0.4)',
    '--t5ek-safe-accent': 'rgba(0, 150, 100, 0.6)',
    '--t5ek-unsafe-accent': 'rgba(255, 0, 0, 0.6)',
    '--t5ek-header-background': 'rgba(255, 255, 255, 0.2)',
    '--t5ek-header-border': 'rgba(0, 0, 0, 0.25)',
    '--t5ek-stat-font': 'rgba(236, 233, 223, 1)',
    '--t5ek-prepareable': 'rgba(119, 136, 153, 1)',
    '--t5ek-equipped': 'rgba(50, 205, 50, 0.3)',
    '--t5ek-equipped-outline': 'rgba(50, 205, 50, 1)',
    '--t5ek-equipped-accent': 'rgba(173, 255, 47, 1)',
    '--t5ek-prepared': 'rgba(50, 205, 50, 0.3)',
    '--t5ek-prepared-outline': 'rgba(50, 205, 50, 1)',
    '--t5ek-prepared-accent': 'rgba(173, 255, 47, 1)',
    '--t5ek-pact': 'rgba(250, 0, 180, 0.3)',
    '--t5ek-pact-outline': 'rgba(250, 50, 213, 1)',
    '--t5ek-pact-accent': 'rgba(198, 119, 193, 1)',
    '--t5ek-atwill': 'rgba(226, 246, 4, 0.3)',
    '--t5ek-atwill-outline': 'rgba(163, 165, 50, 1)',
    '--t5ek-atwill-accent': 'rgba(255, 242, 0, 1)',
    '--t5ek-innate': 'rgba(255, 0, 0, 0.3)',
    '--t5ek-innate-outline': 'rgba(231, 23, 23, 1)',
    '--t5ek-innate-accent': 'rgba(195, 69, 69, 1)',
    '--t5ek-alwaysprepared': 'rgba(0, 0, 255, 0.15)',
    '--t5ek-alwaysprepared-outline': 'rgba(65, 105, 225, 1)',
    '--t5ek-alwaysprepared-accent': 'rgba(0, 191, 255, 1)',
    '--t5ek-magic-accent': 'rgba(255, 255, 0, 1)',
    '--t5ek-faint-magic-accent': 'rgba(255, 255, 0, 0.6)',
    '--t5ek-magic-outline': 'rgba(175, 255, 47, 1)',
    '--t5ek-attunement-required': 'rgba(205, 92, 92, 1)',
    '--t5ek-icon-attuned': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-xp-bar': 'rgba(94, 225, 146, 1)',
    '--t5ek-encumbrance-bar': 'rgba(108, 138, 165, 1)',
    '--t5ek-encumbrance-bar-outline': 'rgba(205, 228, 255, 1)',
    '--t5ek-encumbrance-outline': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-warning-accent': 'rgba(255, 0, 0, 0.6)',
    '--t5ek-icon-background': 'rgba(236, 233, 223, 1)',
    '--t5ek-icon-shadow': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-outline': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-font': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-exhaustion-font': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-hover': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-pc-border': '0px',
    '--t5ek-npc-border': '0px',
    '--t5ek-vehicle-border': '0px',
    '--t5ek-note-background': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-exhaustion-lvl1': 'rgba(255, 230, 0, 1)',
    '--t5ek-exhaustion-lvl2': 'rgba(255, 130, 0, 1)',
    '--t5ek-exhaustion-lvl3': 'rgba(255, 50, 0, 1)',
    '--t5ek-ability-accent': 'darkslategrey',
    '--t5ek-context-outline': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-context-shadow': 'rgba(0, 0, 0, 0.65)',
    '--t5ek-check-default':
      "url('/modules/tidy5e-sheet-kgar/images/check-dark-unchecked.svg')",
    '--t5ek-check-checked':
      "url('/modules/tidy5e-sheet-kgar/images/check-dark-checked.svg')",
    '--t5ek-checkbox-font': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-checkbox-outline': 'rgba(150, 150, 150, 1)',
    '--t5ek-checkbox-unchecked': '#d8d7d1',
    '--t5ek-checkbox-checked': 'rgba(0, 255, 0, 0.3)',
    '--t5ek-item-input-background': 'rgba(255, 255, 255, 0.3)',
    '--t5ek-item-input-background-hover': 'rgba(255, 255, 255, 0.5)',
    '--t5ek-encumbrance-text': 'rgba(238, 238, 238, 1)',
    '--t5ek-death-save-color': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-inspiration-color-hover': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-inspiration-text-shadow-hover': 'rgba(118, 228, 255, 0.5)',
    '--t5ek-inspiration-inspired-text-shadow': '#76e4ff',
    '--t5ek-inspiration-inspired-background': 'rgba(153, 153, 153, 1)',
    '--t5ek-motion-color-hover': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-motion-text-shadow-hover': 'rgba(118, 228, 255, 0.5)',
    '--t5ek-motion-in-motion-text-shadow': '#76e4ff',
    '--t5ek-motion-in-motion-background': 'rgba(153, 153, 153, 1)',
    '--t5ek-hp-bar-color': 'rgba(0, 200, 0, 0.6)',
    '--t5ek-death-save-backdrop-background': 'rgba(255, 0, 0, 0.5)',
    '--t5ek-death-save-text-shadow': 'rgb(34, 34, 34)',
    '--t5ek-hp-overlay-background': 'rgba(255, 0, 0, 1)',
    '--t5ek-inventory-grid-image-contrast-text-shadow': 'rgba(0, 0, 0, 1)',
    '--t5ek-inventory-grid-hover-use-item-contrast-text-shadow':
      'rgba(255, 255, 255, 1)',
    '--t5ek-item-info-card-bg': "url('../../../ui/parchment.jpg')",
    '--t5ek-content-entity-link-color': 'var(--t5ek-primary-font)',
    '--t5ek-content-entity-link-hover-color': 'var(--t5ek-white)',
    '--t5ek-content-entity-link-bg': 'var(--t5ek-faintest-color)',
    '--t5ek-content-entity-link-hover-bg': 'var(--t5ek-primary-accent)',
  },
};
