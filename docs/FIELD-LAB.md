# Field lab: reproducible, privacy-preserving observations

## Permission and ethics
Only test games and systems you own or are authorized to assess. Never bypass anti-cheat, tamper with the client, defeat encryption, intercept other users, scrape private records or publish raw identifiers.

## Reproducible session protocol
1. Record title, edition, version, platform, OS, network setup, launcher, date, and exact consent boundary.
2. Record 10 minutes of baseline OS traffic before launching the game.
3. Separately observe 10 minutes in launcher/menu, 10 minutes idle in-game, and 10 minutes of normal play. Repeat with care for random variability.
4. Use built-in Windows Resource Monitor or Wireshark only on systems and interfaces you control. Prefer metadata observations such as connection domains and aggregate transfer sizes.
5. Note confounders: OS updates, launcher updates, cloud sync, voice chat, friends lists, multiplayer matchmaking, telemetry settings.
6. Redact account IDs, IP addresses, device identifiers, tokens, messages, voice, and location before publishing.
7. Include test limitations: TLS payloads are usually encrypted, network destinations can be shared/CDN infrastructure, and network traffic cannot prove server-side psychological inference.
8. Archive only sanitized summaries, reproducible steps, and hashes of local privately held raw captures when necessary.

## Public report fields
- Case ID, exact title/build/platform, test date, consent basis
- Test environment and baseline
- Observed destinations (redacted as appropriate)
- Protocol/method, observation windows, size ranges
- Repeated findings and confounding factors
- Supported conclusion and explicit non-conclusion
- Primary documentation URLs
- Review status and version
