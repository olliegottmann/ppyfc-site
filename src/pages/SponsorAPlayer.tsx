import { useMemo, useState } from 'react'
import { club } from '../data/content'
import SponsorPayment from '../components/SponsorPayment'
import {
  POSITION_ORDER,
  SPONSORSHIP,
  squad,
  type Position,
  type SquadPlayer,
} from '../data/players'

type PositionFilter = Position | 'All'
type AgeFilter = 'All' | 'Under 16' | '16 and over'

function matchesAge(player: SquadPlayer, filter: AgeFilter) {
  if (filter === 'All') return true
  return filter === 'Under 16' ? player.age < 16 : player.age >= 16
}

function PlayerCard({ player }: { player: SquadPlayer }) {
  const subject = encodeURIComponent(
    `Sponsor a player - ${player.label} (${player.role})`,
  )
  const body = encodeURIComponent(
    `I would like to sponsor ${player.label}, ${player.role}, age ${player.age}, ` +
      `for the ${SPONSORSHIP.season} season at ${SPONSORSHIP.symbol}${SPONSORSHIP.monthly} a month.\n\n` +
      `Please send me the details of how to set this up.`,
  )

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ghanafc-primary text-base font-black text-white">
          {player.label.charAt(0)}
        </div>
        {player.available ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-ghanafc-secondary">
            Available
          </span>
        ) : (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
            Sponsored
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-ghanafc-dark">{player.label}</h3>
      <p className="text-sm text-ghanafc-secondary">{player.role}</p>
      <p className="mb-4 text-sm text-gray-500">Age {player.age}</p>

      <div className="mt-auto">
        {player.available ? (
          <a
            href={`mailto:${club.email}?subject=${subject}&body=${body}`}
            className="block rounded-lg bg-ghanafc-primary px-4 py-2.5 text-center font-semibold text-white transition-colors hover:bg-red-800"
          >
            Sponsor for {SPONSORSHIP.symbol}
            {SPONSORSHIP.monthly}/month
          </a>
        ) : (
          <span className="block rounded-lg bg-gray-100 px-4 py-2.5 text-center font-semibold text-gray-400">
            Already sponsored
          </span>
        )}
      </div>
    </div>
  )
}

export default function SponsorAPlayer() {
  const [position, setPosition] = useState<PositionFilter>('All')
  const [age, setAge] = useState<AgeFilter>('All')

  const filtered = useMemo(
    () =>
      squad.filter(
        (p) => (position === 'All' || p.position === position) && matchesAge(p, age),
      ),
    [position, age],
  )

  const grouped = useMemo(
    () =>
      POSITION_ORDER.map((pos) => ({
        position: pos,
        players: filtered
          .filter((p) => p.position === pos)
          .sort((a, b) => a.label.localeCompare(b.label)),
      })).filter((g) => g.players.length > 0),
    [filtered],
  )

  const availableCount = squad.filter((p) => p.available).length
  const positionFilters: PositionFilter[] = ['All', ...POSITION_ORDER]
  const ageFilters: AgeFilter[] = ['All', 'Under 16', '16 and over']

  return (
    <div>
      <section className="bg-gradient-to-br from-ghanafc-primary via-red-800 to-ghanafc-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl">
            Sponsor a <span className="text-ghanafc-accent">Player</span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg md:text-xl">
            {SPONSORSHIP.symbol}
            {SPONSORSHIP.monthly} a month backs one young footballer through the{' '}
            {SPONSORSHIP.season} season — boots, kit, training and the chance to be seen.
          </p>
          <div className="inline-block rounded-full bg-ghanafc-accent px-6 py-3 text-lg font-bold text-black">
            {availableCount} places available
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Choose a player',
                body: 'Browse the squad by position and age, and pick the player you would like to back for the season.',
              },
              {
                title: `${SPONSORSHIP.symbol}${SPONSORSHIP.monthly} a month`,
                body: 'Your sponsorship goes towards boots, kit, training costs and travel to fixtures where scouts attend.',
              },
              {
                title: 'Follow the season',
                body: 'Sponsors get updates on how the squad is progressing across the season.',
              },
            ].map((s) => (
              <div key={s.title} className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-2 text-lg font-bold text-ghanafc-primary">{s.title}</h3>
                <p className="text-sm text-gray-700">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 space-y-4 rounded-lg bg-gray-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-gray-700">Position:</span>
              {positionFilters.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPosition(p)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    position === p
                      ? 'bg-ghanafc-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-gray-700">Age:</span>
              {ageFilters.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAge(a)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    age === a
                      ? 'bg-ghanafc-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {grouped.length === 0 ? (
            <p className="py-12 text-center text-gray-500">
              No players match that combination. Try widening the filters.
            </p>
          ) : (
            grouped.map((group) => (
              <div key={group.position} className="mb-10">
                <h2 className="mb-4 border-b border-gray-200 pb-2 text-2xl font-bold text-ghanafc-primary">
                  {group.position}s
                  <span className="ml-2 text-base font-normal text-gray-500">
                    ({group.players.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.players.map((p) => (
                    <PlayerCard key={p.id} player={p} />
                  ))}
                </div>
              </div>
            ))
          )}

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
            <p>
              <strong className="text-ghanafc-dark">A note on our players.</strong> Many of this
              squad are under 18, so players are identified by initial only — no names, no
              photographs and no contact details. Sponsors support a place in the squad, not a
              personal relationship with a child, and all contact runs through the club.
            </p>
          </div>

          <div className="mt-6">
            <SponsorPayment />
          </div>
        </div>
      </section>
    </div>
  )
}
