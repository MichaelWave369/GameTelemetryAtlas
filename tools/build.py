"""Build the dependency-free browser dataset from canonical JSON."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
raw=(root/"data"/"atlas.json").read_text(encoding="utf-8")
json.loads(raw)
(root/"assets"/"atlas-data.js").write_text("window.ATLAS_DATA = "+raw.strip()+";\n",encoding="utf-8")
print("Browser data updated")
