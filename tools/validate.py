"""Validate source provenance and avoid accidentally presenting Lens as a proven deployment."""
import json, pathlib, sys
root=pathlib.Path(__file__).resolve().parents[1]
data=json.loads((root/"data"/"atlas.json").read_text(encoding="utf-8"))
errors=[]
sources=data["sources"]; records=data["records"]
ids=[s["id"] for s in sources]
if len(ids)!=len(set(ids)):errors.append("duplicate source id")
seen=set()
allowed={"Official disclosure","Documented game feature","Context only","Unverified allegation"}
for s in sources:
    if not s["url"].startswith("https://"):errors.append("missing HTTPS URL: "+s["id"])
    for k in ("title","publisher","kind","checked","notes"):
        if not s.get(k):errors.append("missing "+k+" on "+s["id"])
for r in records:
    if r["id"] in seen:errors.append("duplicate record id: "+r["id"])
    seen.add(r["id"])
    if r["status"] not in allowed:errors.append("bad status: "+r["id"])
    if r["status"]=="Unverified allegation" and "unverified" not in r["scope"].lower():errors.append("unverified status missing scope: "+r["id"])
    for k in ("title","company","unit","scope","summary","what_is_shown","what_is_not_shown","testing"):
        if not r.get(k):errors.append("missing "+k+" on "+r["id"])
    if not r.get("topics") or not r.get("examples") or not r.get("sources"):errors.append("incomplete record "+r["id"])
    for sid in r["sources"]:
        if sid not in ids:errors.append("unknown source "+sid+" in "+r["id"])
if errors:
    print("\n".join("ERROR: "+e for e in errors)); sys.exit(1)
print(f"PASS: {len(records)} entries, {len(sources)} sources, no missing references")
