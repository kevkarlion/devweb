# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When creating a GitHub issue, bug report, or feature request | issue-creation | /home/kriq/.config/opencode/skills/issue-creation/SKILL.md |
| When creating a pull request or preparing changes for review | branch-pr | /home/kriq/.config/opencode/skills/branch-pr/SKILL.md |
| When saying "judgment day", "review adversarial", "dual review", "doble review", "juzgar" | judgment-day | /home/kriq/.config/opencode/skills/judgment-day/SKILL.md |
| When creating new AI agent skills or documenting patterns for AI | skill-creator | /home/kriq/.config/opencode/skills/skill-creator/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### issue-creation
- Blank issues are disabled — MUST use a template (bug report or feature request)
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues

### branch-pr
- Every PR MUST link an approved issue — no exceptions
- Every PR MUST have exactly one `type:*` label
- Automated checks must pass before merge is possible
- Blank PRs without issue linkage will be blocked by GitHub Actions

### judgment-day
- Launch two independent blind judge sub-agents simultaneously to review the same target
- Synthesize findings from both judges before applying fixes
- Re-judge after fixes until both pass
- Escalate after 2 iterations if consensus not reached

### skill-creator
- Create a skill when: pattern is used repeatedly, project-specific conventions differ, complex workflows need guidance, decision trees help AI choose
- Don't create when: documentation already exists, pattern is trivial, one-off task

## Project Conventions

No convention files found in project root.