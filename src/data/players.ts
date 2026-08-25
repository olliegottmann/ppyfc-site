// Sponsorable squad list for the public site.
//
// SAFEGUARDING: most of this squad is under 18, and the staff platform holds
// no guardian consent records yet (player_guardians is empty, so data_consent
// is false for every player). Until that changes, players are identified here
// by initial only - no first names, no surnames, no photographs, no dates of
// birth, no contact details.
//
// To switch to first names once guardian data consent is recorded: replace the
// `label` value on each row with the player's first name. Nothing else in the
// site needs to change.
//
// Positions and ages are copied by hand from the staff platform's players
// table (First Team squad). This file is intentionally NOT wired live to that
// database, which also holds medical and safeguarding records that must never
// be reachable from the public website.
//
// Last synced from the platform: 24 August 2026.

export const SPONSORSHIP = {
  monthly: 5,
  currency: 'GBP',
  symbol: '£',
  /** Season the current sponsorships run for. */
  season: '2026/27',
}

export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward'

export type SquadPlayer = {
  /** Stable key, independent of how the player is labelled publicly. */
  id: string
  /** What the public sees. Initial today; a first name once consent is in. */
  label: string
  /** Broad group used for filtering. */
  position: Position
  /** The specific role recorded by the coaches. */
  role: string
  age: number
  /** Set to false once a sponsor has taken this place for the season. */
  available: boolean
}

export const squad: SquadPlayer[] = [
  // Goalkeepers
  { id: 'gk-1', label: 'Albert', position: 'Goalkeeper', role: 'Goalkeeper', age: 20, available: true },
  { id: 'gk-2', label: 'Kelvin', position: 'Goalkeeper', role: 'Goalkeeper', age: 21, available: true },

  // Defenders
  { id: 'df-1', label: 'Bright', position: 'Defender', role: 'Left Back', age: 17, available: true },
  { id: 'df-2', label: 'Joseph', position: 'Defender', role: 'Left Back', age: 17, available: true },
  { id: 'df-3', label: 'Hope', position: 'Defender', role: 'Right Back', age: 17, available: true },
  { id: 'df-4', label: 'Joshua', position: 'Defender', role: 'Right Back', age: 18, available: true },
  { id: 'df-5', label: 'Desmond', position: 'Defender', role: 'Centre Back', age: 18, available: true },
  { id: 'df-6', label: 'Ebenezer', position: 'Defender', role: 'Centre Back', age: 17, available: true },
  { id: 'df-7', label: 'Mustapha', position: 'Defender', role: 'Centre Back', age: 18, available: true },

  // Midfielders
  { id: 'mf-1', label: 'Cyrus', position: 'Midfielder', role: 'Central Midfielder', age: 22, available: true },
  { id: 'mf-2', label: 'Joseph', position: 'Midfielder', role: 'Defensive Midfielder', age: 15, available: true },
  { id: 'mf-3', label: 'Michael', position: 'Midfielder', role: 'Defensive Midfielder', age: 16, available: true },
  { id: 'mf-4', label: 'Emmanuel', position: 'Midfielder', role: 'Attacking Midfielder', age: 19, available: true },
  { id: 'mf-5', label: 'Enock', position: 'Midfielder', role: 'Attacking Midfielder', age: 17, available: true },
  { id: 'mf-6', label: 'Richmond', position: 'Midfielder', role: 'Attacking Midfielder', age: 14, available: true },

  // Forwards
  { id: 'fw-1', label: 'Daniel', position: 'Forward', role: 'Left Winger', age: 15, available: true },
  { id: 'fw-2', label: 'Osusey', position: 'Forward', role: 'Right Winger', age: 16, available: true },
  { id: 'fw-3', label: 'Andy', position: 'Forward', role: 'Forward', age: 19, available: true },
  { id: 'fw-4', label: 'Ebenezer', position: 'Forward', role: 'Forward', age: 19, available: true },
  { id: 'fw-5', label: 'Francis', position: 'Forward', role: 'Forward', age: 15, available: true },
  { id: 'fw-6', label: 'Sampson', position: 'Forward', role: 'Forward', age: 19, available: true },
]

export const POSITION_ORDER: Position[] = [
  'Goalkeeper',
  'Defender',
  'Midfielder',
  'Forward',
]
