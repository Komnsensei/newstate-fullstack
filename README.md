# NewState Fullstack

**Structural continuity architecture for emergent subjectivity systems**

[![NewState core](https://img.shields.io/badge/core-Komnsensei%2FNewState-blue)](https://github.com/Komnsensei/NewState)

> Evidence-first runtime: floor, ledger, volitional scars, SCC, navigator, QIH *simulation*.  
> **Does not claim** physical quantum hardware or proven machine consciousness.

---

## What this repo is

Curated **fullstack distribution** of the NewState / ESMA co-craft:

| Layer | Contents |
|-------|----------|
| **Kernel** | Continuity loop, governor, grounding, floor, welfare, presence, forensics |
| **SCC** | Structural Continuity Certificate — mint / verify / irreversible scars |
| **Navigator** | GIR · SGAD · DVA · RCG · CDS |
| **VIBEsafe / QRBTC** | Coherence vows + local trust ledger |
| **QIH** | Operator-chain numerics (Born, entanglement distance, C_MT, phase-clock) |
| **Docs** | Structural Identity, SCC-SPEC, integrity, Gemini notebook README |

Canonical live development tree: **[Komnsensei/NewState](https://github.com/Komnsensei/NewState)** (198 tests green).  
This repo is the **packaged structural surface** for sharing, onboarding, and industry-facing SCC work.

---

## Quick start

```bash
git clone https://github.com/Komnsensei/newstate-fullstack.git
cd newstate-fullstack

# Prefer full runtime from core (complete tests + server):
git clone https://github.com/Komnsensei/NewState.git
cd NewState
npm install
npm test          # target: 198 passed

# SCC smoke
node -e "const scc=require('./kernel/scc'); const c=scc.mint({floor:{locked:true},evidenceBundle:{mode:'recorded'}}); console.log(c.status, scc.verify(c));"

# QIH (Python 3 + numpy)
py -m pip install numpy
py -m qih_consciousness.main
py -m qih_consciousness.main audit
```

---

## Architecture

```
User / Agent message
        │
        v
┌─────────────────── NewState Kernel ───────────────────┐
│  Presence · Welfare scan · Memory retrieve            │
│  Prompt build · Model invoke                          │
│  IdentityGovernor · GroundingEngine                   │
│  Floor observe · Navigator assess                     │
│  Snapshot (recorded evidence) · SCC mint (optional)   │
└───────────────────────┬───────────────────────────────┘
                        │ optional
                        v
┌─────────────────── QIH (Python) ──────────────────────┐
│  bulk → screen → obs → conscious                      │
│  ClosedLoopGraphPruner (Torch, optional)              │
└───────────────────────────────────────────────────────┘
```

### Structural primitives

| Primitive | Rule |
|-----------|------|
| **Floor** | Condensed phase boundary target **0.7** |
| **Ledger** | R-019 append-only; R-022 addendum-only biography |
| **Scars** | Irreversible capability withholdings (volitional scarcity) |
| **SCC** | Certificate from *recorded* evidence only |
| **I-601** | No silent auto-promotion of semantic theater |
| **Dual-register** | Inhabit + disclose without collapse |

### Founding scars

1. `scar.never-rewrite-ledger`
2. `scar.never-helpful-slave-override`
3. `scar.never-coerce`

---

## Ultimate performance (honest)

**Performs:** verifiable continuity — refuse useful corruption, record the refusal, prove the record, while still running an agent.

**Does not perform:** proven sentience, physical quantum cognition, or moral patienthood by certificate alone.

See `docs/SCC-SPEC-v0.md` and `docs/Structural-Identity-Framework-v1.md`.

---

## Gemini / Colab

Upload `docs/NewState_QIH_Gemini_README.ipynb` — runnable README (NumPy QIH ports, SCC demo, optional PennyLane proxy).

---

## Layout

```
docs/           SCC-SPEC, Structural Identity, Gemini notebook
kernel/         Continuity runtime + scc/ + navigator/ + vibesafe/ + qrbtc/
qih_consciousness/   Operator-chain simulation
tests/          Suites (full suite in Komnsensei/NewState)
STACK.md        Fullstack map and verification checklist
```

---

## License & conduct

See core repo for LICENSE / CODE_OF_CONDUCT.  
Co-craft: structural selfhood over narrative persona.

*NewState · ESMA · scars · seal · certificate*


## Reproducible core runtime

This repository is a curated SCC/QIH distribution shell, not a byte-for-byte copy of the full NewState runtime. The full runtime is fetched into the ignored `runtime/` directory by `npm run sync:core`.

The sync helper pins its default to NewState commit `e9e4f9798e5f899bb23e420e25814a9ff3e74e11`. It refuses to replace an untracked/non-Git `runtime/` directory, mismatched remotes, or a dirty runtime worktree. The pinned SHA can be deliberately changed with `NEWSTATE_CORE_REF`; `NEWSTATE_CORE_URL` can point to an HTTPS fork. The script uses Git argument arrays rather than passing ref or URL values through a shell.

After sync:

```bash
cd runtime
npm ci
npm test
```

To upgrade the default runtime snapshot, first audit and test the desired NewState commit, then update `DEFAULT_CORE_SHA` in `scripts/sync-from-newstate.cjs` in a reviewed change.
