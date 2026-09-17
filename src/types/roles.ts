export type Faction = 'werewolf' | 'villager' | 'neutral'

export type RoleId = 
  | 'werewolf'
  | 'white_werewolf'
  | 'witch'
  | 'seer'
  | 'matratze'
  | 'trapper'
  | 'cupid'
  | 'thief'
  | 'suicidal'
  | 'terrorist'
  | 'hunter'
  | 'villager'
  | 'cult'

export interface Player {
  id: string
  name: string
  roleId: RoleId | null
  isAlive: boolean
  isMayor: boolean
  isLoved: boolean
  isProtected: boolean
}

export type GamePhase = 'setup' | 'reveal' | 'night' | 'day'