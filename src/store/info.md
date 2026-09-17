│   ├── store/                  # Zustand state management
│   │   ├── useGameStore.ts     # Main active game state (Players, alive/dead, step)
│   │   ├── useSettingsStore.ts # Global settings (Theme, sound enabled, custom roles)
│   │   └── selectors/          # Computed state helpers (e.g., getNightActionableRoles)