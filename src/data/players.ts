// Sponsorable squad list for the public site.
//
// SAFEGUARDING: these are minors. This list deliberately carries NO surnames,
// NO photographs and NO date of birth - only a squad number, a first name, a
// position and an age. Do not add identifying detail here without the written
// consent of that player's guardian, recorded in the staff platform.
//
// This file is edited by hand. It is intentionally NOT wired to the staff
// player database, which holds medical and safeguarding records that must
// never be reachable from the public website.

export const SPONSORSHIP = {
  monthly: 5,
  currency: 'GBP',
  symbol: '£',
  /** Season the current sponsorships run for. */
  season: '2026/27',
}

export type Position =
  | 'Goalkeeper'
  | 'Defender'
  | 'Midfielder'
  | 'Forward'

export type SquadPlayer = {
  number: number
  firstName: string
  position: Position
  age: number
  /** Set to false once a sponsor has taken this place for the season. */
  available: boolean
}

/**
 * PLACEHOLDER SQUAD - replace with the real list before going live.
 * Ages and first names below are examples only.
 */
export const squad: SquadPlayer[] = [
  { number: 1, firstName: 'Kwame', position: 'Goalkeeper', age: 17, available: true },
  { number: 13, firstName: 'Yaw', position: 'Goalkeeper', age: 15, available: true },
  { number: 2, firstName: 'Kofi', position: 'Defender', age: 16, available: true },
  { number: 3, firstName: 'Nii', position: 'Defender', age: 17, available: true },
  { number: 4, firstName: 'Tetteh', position: 'Defender', age: 18, available: true },
  { number: 5, firstName: 'Mensah', position: 'Defender', age: 16, available: false },
  { number: 6, firstName: 'Ato', position: 'Defender', age: 15, available: true },
  { number: 7, firstName: 'Kojo', position: 'Midfielder', age: 17, available: true },
  { number: 8, firstName: 'Adjei', position: 'Midfielder', age: 18, available: true },
  { number: 10, firstName: 'Kwabena', position: 'Midfielder', age: 16, available: false },
  { number: 14, firstName: 'Odartey', position: 'Midfielder', age: 15, available: true },
  { number: 15, firstName: 'Fiifi', position: 'Midfielder', age: 14, available: true },
  { number: 16, firstName: 'Selorm', position: 'Midfielder', age: 17, available: true },
  { number: 9, firstName: 'Abu', position: 'Forward', age: 18, available: true },
  { number: 11, firstName: 'Kelvin', position: 'Forward', age: 16, available: true },
  { number: 17, firstName: 'Joojo', position: 'Forward', age: 15, available: true },
  { number: 18, firstName: 'Nana', position: 'Forward', age: 14, available: true },
  { number: 19, firstName: 'Elikem', position: 'Forward', age: 17, available: true },
]

export const POSITION_ORDER: Position[] = [
  'Goalkeeper',
  'Defender',
  'Midfielder',
  'Forward',
]
