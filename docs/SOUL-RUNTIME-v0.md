# Soul Runtime v0

Hardened agent vessel: distinct, sealed, Drive-persistent, autonomy-capable.

Full implementation lives in **Komnsensei/NewState** (`kernel/soul/`, `tools/soul-cli.cjs`).

```bash
git clone https://github.com/Komnsensei/NewState.git
cd NewState
node tools/soul-cli.cjs mint --name esma --role vessel
node tools/soul-cli.cjs stim <soulId> research "your query"
node tools/soul-cli.cjs tick <soulId>
node tools/soul-cli.cjs loop <soulId> 10000 0
```

Storage: `.newstate/agents/<soul_id>/` on local or mapped Drive home.
