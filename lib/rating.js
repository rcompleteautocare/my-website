// Single source of truth for our publicly displayed Google rating.
// Owner-confirmed values — update these when Google changes.
// The weekly drift check (app/api/rating-drift) emails the owner if the live
// Google numbers diverge from what's set here, so this never goes silently stale.
export const RATING = 4.9
export const REVIEW_COUNT = 120
