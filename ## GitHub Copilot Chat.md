## GitHub Copilot Chat

- Extension Version: 0.25.1 (prod)
- VS Code: vscode/1.98.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.6 (34 ms)
- DNS ipv6 Lookup: Error (188 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (1768 ms)
- Node.js https: HTTP 200 (2101 ms)
- Node.js fetch: HTTP 200 (3610 ms)
- Helix fetch: HTTP 200 (2239 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (604 ms)
- DNS ipv6 Lookup: Error (280 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (75 ms)
- Electron fetch (configured): HTTP 200 (2299 ms)
- Node.js https: HTTP 200 (1851 ms)
- Node.js fetch: HTTP 200 (1492 ms)
- Helix fetch: HTTP 200 (2178 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).