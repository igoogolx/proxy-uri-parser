interface WsOptions {
  path?: string;
  headers?: {
    [key: string]: string;
  };
  "max-early-data"?: number;
  "early-data-header-name"?: string;
  "v2ray-http-upgrade"?: boolean;
  "v2ray-http-upgrade-fast-open"?: boolean;
}

interface HttpOptions {
  method?: string;
  path?: string[];
  headers?: {
    [key: string]: string[];
  };
}

interface H2Options {
  path?: string;
  host?: string;
}

interface GrpcOptions {
  "grpc-service-name"?: string;
}

interface RealityOptions {
  "public-key"?: string;
  "short-id"?: string;
}
type ClientFingerprint =
  | "chrome"
  | "firefox"
  | "safari"
  | "iOS"
  | "android"
  | "edge"
  | "360"
  | "qq"
  | "random";
type NetworkType = "ws" | "http" | "h2" | "grpc" | "tcp";
type CipherType =
  | "none"
  | "auto"
  | "dummy"
  | "aes-128-gcm"
  | "aes-192-gcm"
  | "aes-256-gcm"
  | "lea-128-gcm"
  | "lea-192-gcm"
  | "lea-256-gcm"
  | "aes-128-gcm-siv"
  | "aes-256-gcm-siv"
  | "2022-blake3-aes-128-gcm"
  | "2022-blake3-aes-256-gcm"
  | "aes-128-cfb"
  | "aes-192-cfb"
  | "aes-256-cfb"
  | "aes-128-ctr"
  | "aes-192-ctr"
  | "aes-256-ctr"
  | "chacha20"
  | "chacha20-ietf"
  | "chacha20-ietf-poly1305"
  | "2022-blake3-chacha20-poly1305"
  | "rabbit128-poly1305"
  | "xchacha20-ietf-poly1305"
  | "xchacha20"
  | "aegis-128l"
  | "aegis-256"
  | "aez-384"
  | "deoxys-ii-256-128"
  | "rc4-md5";
// base
interface IProxyBaseConfig {
  tfo?: boolean;
  mptcp?: boolean;
  "interface-name"?: string;
  "routing-mark"?: number;
  "ip-version"?: "dual" | "ipv4" | "ipv6" | "ipv4-prefer" | "ipv6-prefer";
  "dialer-proxy"?: string;
}
// direct
interface IProxyDirectConfig extends IProxyBaseConfig {
  name: string;
  type: "direct";
}
// dns
interface IProxyDnsConfig extends IProxyBaseConfig {
  name: string;
  type: "dns";
}
// http
interface IProxyHttpConfig extends IProxyBaseConfig {
  name: string;
  type: "http";
  server?: string;
  port?: number;
  username?: string;
  password?: string;
  tls?: boolean;
  sni?: string;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  headers?: {
    [key: string]: string;
  };
}
// socks5
interface IProxySocks5Config extends IProxyBaseConfig {
  name: string;
  type: "socks5";
  server?: string;
  port?: number;
  username?: string;
  password?: string;
  tls?: boolean;
  udp?: boolean;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
}
// ssh
interface IProxySshConfig extends IProxyBaseConfig {
  name: string;
  type: "ssh";
  server?: string;
  port?: number;
  username?: string;
  password?: string;
  "private-key"?: string;
  "private-key-passphrase"?: string;
  "host-key"?: string;
  "host-key-algorithms"?: string;
}
// trojan
interface IProxyTrojanConfig extends IProxyBaseConfig {
  name: string;
  type: "trojan";
  server?: string;
  port?: number;
  password?: string;
  alpn?: string[];
  sni?: string;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  udp?: boolean;
  network?: NetworkType;
  "reality-opts"?: RealityOptions;
  "grpc-opts"?: GrpcOptions;
  "ws-opts"?: WsOptions;
  "ss-opts"?: {
    enabled?: boolean;
    method?: string;
    password?: string;
  };
  "client-fingerprint"?: ClientFingerprint;
}
// tuic
interface IProxyTuicConfig extends IProxyBaseConfig {
  name: string;
  type: "tuic";
  server?: string;
  port?: number;
  token?: string;
  uuid?: string;
  password?: string;
  ip?: string;
  "heartbeat-interval"?: number;
  alpn?: string[];
  "reduce-rtt"?: boolean;
  "request-timeout"?: number;
  "udp-relay-mode"?: string;
  "congestion-controller"?: string;
  "disable-sni"?: boolean;
  "max-udp-relay-packet-size"?: number;
  "fast-open"?: boolean;
  "max-open-streams"?: number;
  cwnd?: number;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  ca?: string;
  "ca-str"?: string;
  "recv-window-conn"?: number;
  "recv-window"?: number;
  "disable-mtu-discovery"?: boolean;
  "max-datagram-frame-size"?: number;
  sni?: string;
  "udp-over-stream"?: boolean;
  "udp-over-stream-version"?: number;
}
// vless
interface IProxyVlessConfig extends IProxyBaseConfig {
  name: string;
  type: "vless";
  server?: string;
  port?: number;
  uuid?: string;
  flow?: string;
  tls?: boolean;
  alpn?: string[];
  udp?: boolean;
  "packet-addr"?: boolean;
  xudp?: boolean;
  "packet-encoding"?: string;
  network?: NetworkType;
  "reality-opts"?: RealityOptions;
  "http-opts"?: HttpOptions;
  "h2-opts"?: H2Options;
  "grpc-opts"?: GrpcOptions;
  "ws-opts"?: WsOptions;
  "ws-path"?: string;
  "ws-headers"?: {
    [key: string]: string;
  };
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  servername?: string;
  "client-fingerprint"?: ClientFingerprint;
}
// vmess
interface IProxyVmessConfig extends IProxyBaseConfig {
  name: string;
  type: "vmess";
  server?: string;
  port?: number;
  uuid?: string;
  alterId?: number;
  cipher?: CipherType;
  udp?: boolean;
  network?: NetworkType;
  tls?: boolean;
  alpn?: string[];
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  servername?: string;
  "reality-opts"?: RealityOptions;
  "http-opts"?: HttpOptions;
  "h2-opts"?: H2Options;
  "grpc-opts"?: GrpcOptions;
  "ws-opts"?: WsOptions;
  "packet-addr"?: boolean;
  xudp?: boolean;
  "packet-encoding"?: string;
  "global-padding"?: boolean;
  "authenticated-length"?: boolean;
  "client-fingerprint"?: ClientFingerprint;
}
interface WireGuardPeerOptions {
  server?: string;
  port?: number;
  "public-key"?: string;
  "pre-shared-key"?: string;
  reserved?: number[];
  "allowed-ips"?: string[];
}
// wireguard
interface IProxyWireguardConfig extends IProxyBaseConfig, WireGuardPeerOptions {
  name: string;
  type: "wireguard";
  ip?: string;
  ipv6?: string;
  "private-key"?: string;
  workers?: number;
  mtu?: number;
  udp?: boolean;
  "persistent-keepalive"?: number;
  peers?: WireGuardPeerOptions[];
  "remote-dns-resolve"?: boolean;
  dns?: string[];
  "refresh-server-ip-interval"?: number;
}
// hysteria
interface IProxyHysteriaConfig extends IProxyBaseConfig {
  name: string;
  type: "hysteria";
  server?: string;
  port?: number;
  ports?: string;
  protocol?: string;
  "obfs-protocol"?: string;
  up?: string;
  "up-speed"?: number;
  down?: string;
  "down-speed"?: number;
  auth?: string;
  "auth-str"?: string;
  obfs?: string;
  sni?: string;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  alpn?: string[];
  ca?: string;
  "ca-str"?: string;
  "recv-window-conn"?: number;
  "recv-window"?: number;
  "disable-mtu-discovery"?: boolean;
  "fast-open"?: boolean;
  "hop-interval"?: number;
}
// hysteria2
interface IProxyHysteria2Config extends IProxyBaseConfig {
  name: string;
  type: "hysteria2";
  server?: string;
  port?: number;
  ports?: string;
  "hop-interval"?: number;
  protocol?: string;
  "obfs-protocol"?: string;
  up?: string;
  down?: string;
  password?: string;
  obfs?: string;
  "obfs-password"?: string;
  sni?: string;
  "skip-cert-verify"?: boolean;
  fingerprint?: string;
  alpn?: string[];
  ca?: string;
  "ca-str"?: string;
  cwnd?: number;
  "udp-mtu"?: number;
}
// shadowsocks
interface IProxyShadowsocksConfig extends IProxyBaseConfig {
  name: string;
  type: "ss";
  server?: string;
  port?: number;
  password?: string;
  cipher?: CipherType;
  udp?: boolean;
  plugin?: "obfs" | "v2ray-plugin" | "shadow-tls" | "restls";
  "plugin-opts"?: {
    mode?: string;
    host?: string;
    password?: string;
    path?: string;
    tls?: string;
    fingerprint?: string;
    headers?: {
      [key: string]: string;
    };
    "skip-cert-verify"?: boolean;
    version?: number;
    mux?: boolean;
    "v2ray-http-upgrade"?: boolean;
    "v2ray-http-upgrade-fast-open"?: boolean;
    "version-hint"?: string;
    "restls-script"?: string;
  };
  "udp-over-tcp"?: boolean;
  "udp-over-tcp-version"?: number;
  "client-fingerprint"?: ClientFingerprint;
}
// shadowsocksR
interface IProxyshadowsocksRConfig extends IProxyBaseConfig {
  name: string;
  type: "ssr";
  server?: string;
  port?: number;
  password?: string;
  cipher?: CipherType;
  obfs?: string;
  "obfs-param"?: string;
  protocol?: string;
  "protocol-param"?: string;
  udp?: boolean;
}
// sing-mux
interface IProxySmuxConfig {
  smux?: {
    enabled?: boolean;
    protocol?: "smux" | "yamux" | "h2mux";
    "max-connections"?: number;
    "min-streams"?: number;
    "max-streams"?: number;
    padding?: boolean;
    statistic?: boolean;
    "only-tcp"?: boolean;
    "brutal-opts"?: {
      enabled?: boolean;
      up?: string;
      down?: string;
    };
  };
}
// snell
interface IProxySnellConfig extends IProxyBaseConfig {
  name: string;
  type: "snell";
  server?: string;
  port?: number;
  psk?: string;
  udp?: boolean;
  version?: number;
  "obfs-opts"?: {};
}
interface IProxyConfig
  extends IProxyBaseConfig,
    IProxyDirectConfig,
    IProxyDnsConfig,
    IProxyHttpConfig,
    IProxySocks5Config,
    IProxySshConfig,
    IProxyTrojanConfig,
    IProxyTuicConfig,
    IProxyVlessConfig,
    IProxyVmessConfig,
    IProxyWireguardConfig,
    IProxyHysteriaConfig,
    IProxyHysteria2Config,
    IProxyShadowsocksConfig,
    IProxyshadowsocksRConfig,
    IProxySmuxConfig,
    IProxySnellConfig {
  type:
    | "ss"
    | "ssr"
    | "direct"
    | "dns"
    | "snell"
    | "http"
    | "trojan"
    | "hysteria"
    | "hysteria2"
    | "tuic"
    | "wireguard"
    | "ssh"
    | "socks5"
    | "vmess"
    | "vless";
}

interface IVergeConfig {
  app_log_level?: "trace" | "debug" | "info" | "warn" | "error" | string;
  language?: string;
  tray_event?: "main_window" | "system_proxy" | "tun_mode" | string;
  env_type?: "bash" | "cmd" | "powershell" | string;
  startup_script?: string;
  start_page?: string;
  clash_core?: string;
  theme_mode?: "light" | "dark" | "system";
  traffic_graph?: boolean;
  enable_memory_usage?: boolean;
  enable_group_icon?: boolean;
  menu_icon?: "monochrome" | "colorful" | "disable";
  tray_icon?: "monochrome" | "colorful";
  common_tray_icon?: boolean;
  sysproxy_tray_icon?: boolean;
  tun_tray_icon?: boolean;
  enable_tun_mode?: boolean;
  enable_auto_launch?: boolean;
  enable_service_mode?: boolean;
  enable_silent_start?: boolean;
  enable_system_proxy?: boolean;
  proxy_auto_config?: boolean;
  pac_file_content?: string;
  enable_random_port?: boolean;
  verge_mixed_port?: number;
  verge_socks_port?: number;
  verge_redir_port?: number;
  verge_tproxy_port?: number;
  verge_port?: number;
  verge_redir_enabled?: boolean;
  verge_tproxy_enabled?: boolean;
  verge_socks_enabled?: boolean;
  verge_http_enabled?: boolean;
  enable_proxy_guard?: boolean;
  use_default_bypass?: boolean;
  proxy_guard_duration?: number;
  system_proxy_bypass?: string;
  web_ui_list?: string[];
  hotkeys?: string[];
  theme_setting?: {
    primary_color?: string;
    secondary_color?: string;
    primary_text?: string;
    secondary_text?: string;
    info_color?: string;
    error_color?: string;
    warning_color?: string;
    success_color?: string;
    font_family?: string;
    css_injection?: string;
  };
  auto_close_connection?: boolean;
  auto_check_update?: boolean;
  default_latency_test?: string;
  default_latency_timeout?: number;
  enable_builtin_enhanced?: boolean;
  auto_log_clean?: 0 | 1 | 2 | 3;
  proxy_layout_column?: number;
  test_list?: IVergeTestItem[];
}
