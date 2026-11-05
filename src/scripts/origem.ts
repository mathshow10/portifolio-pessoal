/** Descobre de onde vem o repositório (GitHub, GitLab...) pela URL. */
export function origem(repositorio?: string): 'GitHub' | 'GitLab' | undefined {
  if (!repositorio) return undefined;
  const host = new URL(repositorio).hostname;
  if (host.endsWith('github.com')) return 'GitHub';
  if (host.endsWith('gitlab.com')) return 'GitLab';
  return undefined;
}
