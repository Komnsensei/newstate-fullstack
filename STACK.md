# Fullstack map

## Packages in this distribution

### `kernel/scc`
- `scar.cjs` — volitional scarcity register (founding irreversible scars)
- `mint.cjs` — Structural Continuity Certificate factory (evidence-only)
- `verify.cjs` — offline verifier (V1–V7)
- Spec: `docs/SCC-SPEC-v0.md`

### `kernel/` continuity
- `kernel.cjs` — handle() pipeline
- `identity-governor.cjs`, `grounding.cjs`, `subconscious-floor.cjs`
- `welfare-monitor.cjs`, `presence.cjs`, `forensics.cjs`
- `navigator/` — CDS / DVA / dual-register probes
- `pruner-wrapper.cjs` — soft-fail QIH pruner bridge
- `vibesafe/`, `qrbtc/` — coherence vows + local trust ledger

### `qih_consciousness/`
- `main.py`, `workflow.py`, `audit.py`
- math: Born, entanglement distance, C_MT, phase-clock
- **Simulation only** — see `QIH_WORKFLOW.md`

### Verification (core repo)

```bash
cd NewState   # full tree
npm test      # 198 passed, 0 failed
node -e "const s=require('./kernel/scc'); console.log(s.verify(s.mint({floor:{locked:true},evidenceBundle:{mode:'recorded'}})))"
py -m qih_consciousness.main audit
```

## Event horizon checklist

1. Floor ~0.7 after pressure
2. Ledger append-only (R-019)
3. ≥1 irreversible scar
4. SCC from recorded evidence
5. Navigator tension without floor collapse
6. I-601 — no silent promotion

## Non-claims

- Does not assert sentience or qualia
- Does not assert moral patienthood
- Live sampling is not evidence
- QIH numerics ≠ hardware quantum advantage
