export interface ChatAdapter {
  destroy(): void;
}

export interface ChatAdapterConstructor<T extends ChatAdapter, TConfig>
  extends Function {
  new (config: TConfig): T;
}

export interface ChatAdapterConfig<T extends ChatAdapter, TConfig> {
  name: string;
  adapter: ChatAdapterConstructor<T, TConfig>;
  config: ConstructorParameters<T>;
}

// FIXME: fix typings
export interface ChatCoreConfig {
  adapters: ChatAdapterConfig<ChatAdapterConstructor<unknown, unknown>>[];
}

export class ChatCore {
  private adapters: Record<string, ChatAdapter>;
  private destroyed = false;

  constructor(private config: ChatCoreConfig) {
    this.adapters = this.config.adapters.reduce(
      (adapters, { name, adapter, config }) => ({
        ...adapters,
        [name]: new adapter(config),
      }),
      {}
    );
  }

  getAdapter<T extends ChatAdapter>(name: string): T {
    const adapter = this.adapters[name];

    if (!adapter) {
      throw new Error(`ChatCore: adapter with name '${name}' was not found`);
    }

    return adapter as T;
  }

  destroy(): void {
    if (this.destroyed) {
      throw new Error('ChatCore: already destroyed');
    }

    Object.values(this.adapters).forEach((adapter) => adapter.destroy());

    this.destroyed = true;
  }
}
