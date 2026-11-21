# Game Telemetry Transparency Atlas

**Evidence over outrage. Players over profiling.**

A privacy-first, open-source research starter to document what games, platforms, and publishers actually disclose or demonstrably do with gameplay data. The public site is **offline-capable, static, and dependency-free**. No accounts, cookies, advertising, or analytics.

## What's in v0.1.0 (November 21, 2026)

- Searchable interface for **10 findings** linked to **12 sources**.
- Source-backed entries for Xbox network disclosure and diagnostics; King's AI personalization; ZeniMax's inference categories; Activision anti-cheat and device monitoring; Blizzard game data; Rockstar profiling; Forza's documented Drivatar behavior modeling.
- Minecraft included **only as platform context**; not a finding of Minecraft-specific psychological profiling.
- **GTA VI / Lens** included **only as an unverified allegation**, not a confirmed deployment.
- Explicit descriptions of what each source does **not** prove.
- Filters, expand-to-view-source cards, filtered CSV download, and a canonical JSON dataset.
- Reproducible observation protocol, research safeguards, and contribution template.

### Important counts

The interface counts **evidence entries**, not every game collecting gameplay data. It does not claim that the featured publishers deploy the same systems. **Games independently confirmed to use the alleged Take-Two Lens system: zero, as of this review.** This means *not verified*, not *disproved*.

## Open the website

**Live atlas (GitHub Pages):** https://michaelwave369.github.io/GameTelemetryAtlas/

No local server is required. You can browse the research in any modern browser, including your phone. The entire site is static and has no tracker, account, or database.

## Edit or add a finding

- Canonical data: `data/atlas.json`.
- Add a source to the `sources` list with its direct URL, date checked, and evidence type.
- Add one record to `records` with explicit `scope`, `status`, `what_is_shown`, `what_is_not_shown`, and source IDs.
- Run `python tools/validate.py`.
- Run `python tools/build.py` to regenerate `assets/atlas-data.js`.
- Refresh `index.html` to verify the result.

All entries should be independently reviewable. See `docs/METHODOLOGY.md` for confidence and scope rules.

## File structure

```text
index.html                 Offline dashboard
assets/styles.css          Visual system
assets/app.js              Filters, cards, CSV export
assets/atlas-data.js       Generated data bundle; do not edit directly
data/atlas.json            Canonical source and evidence registry
tools/build.py             Regenerate browser bundle
tools/validate.py          Validate source provenance and status values
docs/METHODOLOGY.md        How we label claims
docs/FIELD-LAB.md          Privacy-preserving test protocol
docs/SUBMISSION-TEMPLATE.md Community submission template
docs/DATA-RIGHTS.md        Example player access request
CONTRIBUTING.md           Contribution rules
.github/workflows/validate.yml   Evidence validation CI
CHANGELOG.md               Releases
LICENSE                    Code license (MIT)
DATA-LICENSE               Research data dedication (CC0)
```

## Research safety

Only test devices and accounts you control or have permission to test. Do not bypass anti-cheat, attempt unauthorized access, defeat encryption, intercept other people's traffic, or publish unredacted captures. Network endpoints alone cannot establish what information is in encrypted transmissions or what server-side algorithms infer. No public allegations about individuals without independently verifiable evidence.

## Independence

No affiliation with Microsoft, Take-Two, Rockstar, Activision, Blizzard, King, Bethesda, Mojang, or the listed game studios. This repository does not make legal conclusions or declare companies guilty of wrongdoing.

## Community roadmap

- [ ] Add **title-specific** privacy documents and exact versions by platform.
- [ ] Implement reproducible, consent-based capture report schema and redaction scanner.
- [ ] Set up contributor review and evidence refresh cadence.
- [ ] Add privacy-rights portals and regional data-rights guides.
- [ ] Analyze and document actual user-requested data exports (with explicit consent; publish only anonymized aggregate findings).
- [ ] Validate any Lens-related technical evidence independently, if it emerges.
- [ ] Add company ownership history with dated source references to avoid retroactive assumptions.
- [ ] Make findings and source changes diffable and timestamped.

## License

Code: MIT (`LICENSE`). Original structured research summaries and dataset: CC0 (`DATA-LICENSE`). Third-party source material remains owned by its publishers. Our links and paraphrases do not relicense those sources.