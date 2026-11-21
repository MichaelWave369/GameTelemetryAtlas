# Contributing

We welcome careful corrections more than sensational headlines.

Start with `docs/SUBMISSION-TEMPLATE.md` and `docs/METHODOLOGY.md`. Use one narrowly scoped claim per contribution. Provide direct source URLs, original dates when available, and a summary of what the source does **not** establish.

Run:

```bash
python tools/validate.py
python tools/build.py
```

Open `index.html` to inspect the result. Pull requests run the same dataset validation through a read-only GitHub Actions job. Changes in code or evidence status should be reviewed by a human before merging.

Never post unredacted player data, credentials, private communications or raw packet captures. Do not test accounts, networks or systems without authorization. Do not treat an anonymous allegation, generic patent or parent-company privacy clause as proof about a particular game.

Cite critics and companies fairly. We welcome accurate, narrow claims, good-faith counterevidence, and corrections.