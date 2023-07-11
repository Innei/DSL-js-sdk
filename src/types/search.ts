// generated by src/types/generate.ts

import {components as data} from './data'
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/preview/nft": {
    post: operations["nft"];
  };
  "/api/preview/news": {
    post: operations["news"];
  };
  "/api/preview/feeds": {
    post: operations["feeds"];
  };
  "/api/nft/v2/searchNftCollection": {
    /** NFT collection搜索 */
    post: operations["searchNftCollectionV2"];
  };
  "/api/Feed/v2/search": {
    /** Feed搜索 */
    post: operations["searchFeedV2"];
  };
  "/v1/wiki/search": {
    /** Search wiki */
    get: operations["search"];
  };
  "/v1/suggester/spellCorrection": {
    /** Spell correction (did-you-mean) */
    get: operations["spellCorrection"];
  };
  "/v1/suggester/autoComplete": {
    /** Autocomplete */
    get: operations["autoComplete"];
  };
  "/v1/dapp/search": {
    /** Search Dapp */
    get: operations["search_1"];
  };
  "/v1/content/search": {
    /** Search content */
    get: operations["searchFeed"];
  };
  "/api/wiki/search": {
    /** 搜索wiki */
    get: operations["search_2"];
  };
  "/api/wiki/profile": {
    /** 查询wiki profile */
    get: operations["profile"];
  };
  "/api/search/unifiedSearch": {
    /** 搜索统一API（搜索第一页使用，包含wiki，nft，feed，coin等，减少RPC call） */
    get: operations["unifiedSearch"];
  };
  "/api/search/spellCorrection": {
    /** 纠错 (did-you-mean) */
    get: operations["spellCorrection_1"];
  };
  "/api/search/fullTextSearch": {
    /** 搜索 */
    get: operations["fullTextSearch"];
  };
  "/api/search/detail": {
    /** 详情 */
    get: operations["detail"];
  };
  "/api/search/autoComplete": {
    /** 自动补全 */
    get: operations["autoComplete_1"];
  };
  "/api/search/activityRec": {
    /** Activity推荐 */
    get: operations["activityRec"];
  };
  "/api/project/search": {
    /** 搜索project */
    get: operations["search_3"];
  };
  "/api/nft/nftImages": {
    /** NFT图片列表 */
    get: operations["nftImages"];
  };
  "/api/nft/nftImageDetail": {
    /** NFT图片详情 */
    get: operations["nftImageDetail"];
  };
  "/api/nft/autocomplete": {
    /** NFT自动补全 */
    get: operations["autocomplete"];
  };
  "/api/news/todayInHistory": {
    /** 历史上的今天 */
    get: operations["todayInHistory"];
  };
  "/api/news/recentNews": {
    /** 最新NEWS */
    get: operations["recentNews"];
  };
  "/api/news/hotNews": {
    /** 最热NEWS */
    get: operations["hotNews"];
  };
  "/api/news/detail": {
    /** 新闻详情 */
    get: operations["detail_1"];
  };
  "/api/dapp/search": {
    /** 搜索dapp */
    get: operations["search_4"];
  };
  "/api/coin/search": {
    /** 币价搜索 */
    get: operations["search_5"];
  };
  "/api/coin/priceChart": {
    /** 走势图 */
    get: operations["priceChart"];
  };
}

export type webhooks = Record<string, any>;

export interface components {
  schemas: {
    NFTPreviewParamDTO: {
      /**
       * @description network: avax eth arbitrum bnb optimism polygon 
       * @example avax
       */
      network?: string;
    };
    CollectionPreviewDocDTO: {
      id?: string;
      contractAddress?: string;
      network?: string;
      name?: string;
      symbol?: string;
      description?: string;
      standard?: string;
      logoUrl?: string;
      priceSymbol?: string;
      officialUrl?: string;
      officialDiscord?: string;
      officialTwitter?: string;
      officialTelegram?: string;
      /** Format: double */
      floorPrice?: number;
    };
    NewsPreviewParamDTO: {
      /**
       * Format: int64 
       * @description 时间戳，-1 代表不存在 
       * @default -1 
       * @example -1
       */
      publishDateLte?: number;
      /**
       * Format: int64 
       * @description 时间戳，-1 代表不存在 
       * @default -1 
       * @example -1
       */
      publishDateGte?: number;
    };
    RawNewsPreviewDoc: {
      /** Format: int64 */
      id?: number;
      title?: string;
      summary?: string;
      url?: string;
      fullText?: string;
      coverUrl?: string;
      /** Format: int64 */
      publishedDate?: number;
      source?: string;
      /** Format: double */
      hotScore?: number;
      aiSummary?: string;
    };
    FeedPreviewParamDTO: {
      /**
       * @description collectible donation governance social 
       * @example social
       */
      tag?: string;
      /**
       * @description polygon ethereum arbitrum arweave farcaster optimism zksync crossbell avalanche xdai binance_smart_chain fantom EIP-1577
       *  
       * @example ethereum
       */
      network?: string;
      /**
       * @description Lens Lenster phaver Snapshot OpenSea orb Mirror Gitcoin Orb Farcaster wav3s lenstube Blur xSync Buttrfly ENS Registrar lenstube-bytes TeaParty Crossbell LensPort ChainJet Lenster Community Koru DAO memester 5bba5781-78b5-4927-8d2f-122742817583 beats Lens Claiming App poap Zora memester-competition Aave Lens Bot CrossSync Quix iris xLog Sound LooksRare Foundation re:meme Welcomebot Postter tofuNFT IQ.Wiki diversehq crossbell kaira lens-share refract Soclly Planet BendDAO Matters Mad Finance THS RARA enso dataverse-v0.1.0 Lenster Crowdfund Focalize crossbell.io Share_article dumplingTV lensclubs Lensport pinsta
       *  
       * @example Lenster
       */
      platform?: string;
    };
    TransferDoc: {
      id?: string;
      transactionHash?: string;
      /** Format: date-time */
      timestamp?: string;
      tag?: string;
      type?: string;
      /** Format: int64 */
      index?: number;
      addressFrom?: string;
      addressTo?: string;
      network?: string;
      platform?: string;
      relatedUrls?: (string)[];
      metadata?: string;
      owner?: string;
    };
    CollectionSearchReqDTO: {
      /** @example azuki */
      keyword: string;
      /**
       * Format: int32 
       * @example 1
       */
      page: number;
      /**
       * Format: int32 
       * @example 12
       */
      size: number;
      /**
       * @example NONE 
       * @enum {string}
       */
      sortType?: "NONE" | "_6H_VOLUME_RANK" | "_6H_SALES_RANK" | "_1D_VOLUME_RANK" | "_1D_SALES_RANK" | "_7D_VOLUME_RANK" | "_7D_SALES_RANK" | "_30D_VOLUME_RANK" | "_30D_SALES_RANK" | "_6H_MINT_RANK" | "_1D_MINT_RANK" | "_3D_MINT_RANK" | "_GAS_FEE_1H_RANK" | "GAS_FEE_12H_RANK" | "GAS_FEE_24H_RANK" | "VOLUME_TOTAL_RANK" | "MARKET_CAP_RANK";
      /**
       * @description available value: ALL,EIP1577,BINANCE_SMART_CHAIN,ARBITRUM,ARWEAVE,AVALANCHE,ETHEREUM,FANTOM,OPTIMISM,POLYGON,XDAI,ZKSYNC,AVAX 
       * @example [
       *   "ALL"
       * ]
       */
      networks?: ("ALL" | "AVAX" | "ETHEREUM" | "ARBITRUM" | "OPTIMISM" | "POLYGON" | "EIP1577" | "BINANCE_SMART_CHAIN" | "ARWEAVE" | "AVALANCHE" | "FANTOM" | "XDAI" | "ZKSYNC")[];
    };
    CollectionDocDTO: {
      id?: string;
      /** Format: int32 */
      itemsTotal?: number;
      contractAddress?: string;
      network?: string;
      name?: string;
      symbol?: string;
      description?: string;
      standard?: string;
      logoUrl?: string;
      priceSymbol?: string;
      officialUrl?: string;
      officialDiscord?: string;
      officialTwitter?: string;
      officialTelegram?: string;
      nftScanUrl?: string;
      /** Format: double */
      floorPrice?: number;
      top3images?: (components["schemas"]["NftImageDTO"])[];
    };
    CollectionSearchRespDTO: {
      collections?: (components["schemas"]["CollectionDocDTO"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    NftCollectionDTO: {
      contractName?: string;
      contractAddress?: string;
      description?: string;
    };
    NftImageDTO: {
      id?: string;
      collection?: components["schemas"]["NftCollectionDTO"];
      tokenId?: string;
      tokenUrl?: string;
      name?: string;
      imageUrl?: string;
      attributes?: string;
      /** Format: date-time */
      timestamp?: string;
      /** Format: double */
      rarityScore?: number;
      prompt?: string;
      standard?: string;
      owner?: string;
      network?: string;
      /** Format: double */
      latestTradePrice?: number;
      /** Format: double */
      mintPrice?: number;
      nftScanUrl?: string;
      latestTradeSymbol?: string;
    };
    FeedSearchFactorDTO: {
      /**
       * Format: float 
       * @description >=0, author的match因子 
       * @default 2 
       * @example 2
       */
      authorMatch?: number;
      /**
       * Format: float 
       * @description >=0, owner的match因子 
       * @default 2 
       * @example 2
       */
      ownerMatch?: number;
      /**
       * Format: float 
       * @description >=0, title的match因子 
       * @default 2 
       * @example 2
       */
      titleMatch?: number;
      /**
       * Format: float 
       * @description >=0, body的match因子 
       * @default 1 
       * @example 1
       */
      bodyMatch?: number;
      /**
       * Format: float 
       * @description >=0, title的matchPhrase因子 
       * @default 3 
       * @example 3
       */
      titleMatchPhrase?: number;
      /**
       * Format: float 
       * @description >=0, body的matchPhrase因子 
       * @default 1 
       * @example 1
       */
      bodyMatchPhrase?: number;
      /**
       * Format: float 
       * @description >=0, 不存在的title的match因子 
       * @default 1 
       * @example 1
       */
      notExistTitleMatch?: number;
      /**
       * Format: float 
       * @description >=0, 不存在的title的matchPhrase因子 
       * @default 2 
       * @example 2
       */
      notExistTitleMatchPhrase?: number;
      /**
       * Format: float 
       * @description >=0, 文本长度因子 
       * @default 2 
       * @example 2
       */
      textLength?: number;
      /**
       * Format: float 
       * @description >=0, 语言因子, 依赖query语种 
       * @default 2 
       * @example 2
       */
      lang?: number;
      /**
       * Format: float 
       * @description >=0, 文本质量因子 
       * @default 2 
       * @example 2
       */
      contentScore?: number;
      /**
       * Format: float 
       * @description >=0, 时间因子 
       * @default 2 
       * @example 2
       */
      time?: number;
    };
    /**
     * @description date range 
     * @example null
     */
    FeedSearchReqBetweenDTO: {
      /**
       * Format: int64 
       * @description Timestamp, -1 represents non-existence 
       * @default -1 
       * @example -1
       */
      lte?: number;
      /**
       * Format: int64 
       * @description Timestamp, -1 represents non-existence 
       * @default -1 
       * @example -1
       */
      gte?: number;
    };
    FeedSearchReqDTO: {
      /** @default vitalik */
      keyword: string;
      /**
       * Format: int32 
       * @default 1 
       * @example 1
       */
      page: number;
      /**
       * Format: int32 
       * @default 12 
       * @example 12
       */
      size: number;
      /**
       * @description available value: ALL,MIRROR,FARCASTER,XLOG,CROSSBELL,LENS,MATTERS,MASTODON 
       * @example [
       *   "ALL"
       * ]
       */
      platform?: ("ALL" | "MIRROR" | "FARCASTER" | "XLOG" | "CROSSBELL" | "LENS" | "MATTERS" | "MASTODON")[];
      /**
       * @description available value: ALL,EIP1577,BINANCE_SMART_CHAIN,ARBITRUM,ARWEAVE,AVALANCHE,ETHEREUM,FANTOM,OPTIMISM,POLYGON,XDAI,ZKSYNC,AVAX 
       * @example [
       *   "ALL"
       * ]
       */
      network?: ("ALL" | "EIP1577" | "BINANCE_SMART_CHAIN" | "ARBITRUM" | "ARWEAVE" | "AVALANCHE" | "ETHEREUM" | "FANTOM" | "OPTIMISM" | "POLYGON" | "XDAI" | "ZKSYNC" | "CROSSBELL" | "AVAX" | "FARCASTER")[];
      /**
       * @default NONE 
       * @example NONE 
       * @enum {string}
       */
      sort?: "NONE" | "TIMESTAMP_DESC";
      /**
       * @default ALL 
       * @example ALL 
       * @enum {string}
       */
      lang?: "ALL" | "ENGLISH" | "CHINESE" | "JAPANESE";
      between?: components["schemas"]["FeedSearchReqBetweenDTO"];
      author?: string;
      factor?: components["schemas"]["FeedSearchFactorDTO"];
    };
    FeedRankDocDTO: {
      id?: string;
      transactionHash?: string;
      /** Format: int64 */
      timestamp?: number;
      tag?: string;
      type?: string;
      /** Format: int64 */
      index?: number;
      addressFrom?: string;
      addressTo?: string;
      author?: string;
      network?: string;
      platform?: string;
      source?: string;
      relatedUrls?: (string)[];
      metadata?: data['schemas']['Transfer']['metadata'];
      owner?: string;
      /** Format: float */
      score?: number;
      highlighting?: components["schemas"]["FeedRankDocHighlightingDTO"];
    };
    FeedRankDocHighlightingDTO: {
      title?: string;
      author?: string;
      body?: string;
    };
    FeedSearchNetworkAggDTO: {
      /** @enum {string} */
      network?: "ALL" | "EIP1577" | "BINANCE_SMART_CHAIN" | "ARBITRUM" | "ARWEAVE" | "AVALANCHE" | "ETHEREUM" | "FANTOM" | "OPTIMISM" | "POLYGON" | "XDAI" | "ZKSYNC" | "CROSSBELL" | "AVAX" | "FARCASTER";
      /** Format: int64 */
      count?: number;
    };
    FeedSearchPlatformAggDTO: {
      /** @enum {string} */
      platform?: "ALL" | "MIRROR" | "FARCASTER" | "XLOG" | "CROSSBELL" | "LENS" | "MATTERS" | "MASTODON";
      /** Format: int64 */
      count?: number;
    };
    FeedSearchRespDTO: {
      /** Format: int32 */
      totalPage?: number;
      feeds?: (components["schemas"]["FeedRankDocDTO"])[];
      networkAgg?: (components["schemas"]["FeedSearchNetworkAggDTO"])[];
      platformAgg?: (components["schemas"]["FeedSearchPlatformAggDTO"])[];
    };
    JSONObject: any;
    WikiDocDTO: {
      id?: string;
      transactionHash?: string;
      /** Format: int64 */
      timestamp?: number;
      tag?: string;
      type?: string;
      /** Format: int64 */
      index?: number;
      addressFrom?: string;
      addressTo?: string;
      network?: string;
      platform?: string;
      source?: string;
      relatedUrls?: (string)[];
      metadata?: data['schemas']['Transfer']['metadata'];
      author?: string;
      owner?: string;
      /** Format: float */
      score?: number;
    };
    WikiSearchRespDTO: {
      docs?: (components["schemas"]["WikiDocDTO"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    /** @description 自动补全响应 */
    AutoCompleteRespDTO: {
      option?: string;
      /** @enum {string} */
      type?: "DOMAIN" | "NFT" | "FEED" | "WIKI";
      /** @description nft collection logoUrl */
      thumb?: string;
      address?: string;
    };
    DaapDocDTO: {
      id?: string;
      name?: string;
      icon?: string;
      type?: string;
      url?: string;
      status?: string;
      lastEditedTime?: string;
      appEntryUrl?: string;
      description?: string;
      /** Format: float */
      score?: number;
      similarItems?: (string)[];
    };
    DaapDocDTO0: {
      id?: string;
      name?: string;
      icon?: string;
      type?: string;
      url?: string;
      status?: string;
      lastEditedTime?: string;
      appEntryUrl?: string;
      description?: string;
      /** Format: float */
      score?: number;
      similarItems?: (components["schemas"]["DaapDocDTO"])[];
    };
    DaapSearchRespDTO: {
      docs?: (components["schemas"]["DaapDocDTO0"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    FeedRankActionDoc4ExternalDTO: {
      tag?: string;
      type?: string;
      /** Format: int64 */
      index?: number;
      author?: string;
      metadata?: data['schemas']['Transfer']['metadata'];
      /** Format: float */
      score?: number;
      highlighting?: components["schemas"]["FeedRankDocHighlightingDTO"];
      transaction_hash?: string;
      address_from?: string;
      address_to?: string;
      related_urls?: (string)[];
    };
    FeedRankDoc4ExternalDTO: {
      id?: string;
      owner?: string;
      /** Format: int64 */
      timestamp?: number;
      tag?: string;
      type?: string;
      network?: string;
      platform?: string;
      actions?: (components["schemas"]["FeedRankActionDoc4ExternalDTO"])[];
      transaction_hash?: string;
    };
    FeedSearchResp4ExternalDTO: {
      /** Format: int32 */
      totalPage?: number;
      contents?: (components["schemas"]["FeedRankDoc4ExternalDTO"])[];
      networkAgg?: (components["schemas"]["FeedSearchNetworkAggDTO"])[];
      platformAgg?: (components["schemas"]["FeedSearchPlatformAggDTO"])[];
    };
    WikiProfileRespDTO: {
      url?: string;
      /** @enum {string} */
      type?: "UNKNOWN" | "YOUTUBE" | "GITHUB" | "TWITTER" | "EMAIL" | "FACEBOOK" | "INSTAGRAM" | "LINKEDIN" | "REDDIT" | "TELEGRAM" | "COINMARKETCAP" | "COINGECKO" | "DISCORD";
    };
    /** @description 币价模块响应 */
    CoinSearchRespDTO: {
      coinVsCurrency?: components["schemas"]["CoinVsCurrencyDTO"];
      coinVsCoin?: components["schemas"]["CoinVsCoinDTO"];
      priceChartOf1day?: components["schemas"]["PriceChartDTO"];
      market?: components["schemas"]["JSONObject"];
      coinMetadata?: components["schemas"]["JSONObject"];
      similarCoins?: (components["schemas"]["JSONObject"])[];
    };
    /** @description 币价转换(币与币) */
    CoinVsCoinDTO: {
      coinId?: string;
      exchangeRate?: components["schemas"]["CoinVsCoinRateDTO"];
    };
    CoinVsCoinRateDTO: {
      /** Format: double */
      usdt?: number;
      /** Format: double */
      usdc?: number;
      /** Format: double */
      eth?: number;
      /** Format: double */
      wbtc?: number;
      /** Format: double */
      dai?: number;
      /** Format: double */
      busd?: number;
      /** Format: double */
      bnb?: number;
      /** Format: double */
      cake?: number;
      /** Format: double */
      btcb?: number;
    };
    /** @description 币价转换(币与法币) */
    CoinVsCurrencyDTO: {
      /** @enum {string} */
      direction?: "COIN_TO_CURRENCY" | "CURRENCY_TO_COIN";
      coinId?: string;
      currency?: string;
      /** Format: int32 */
      num?: number;
      /** Format: double */
      rate?: number;
    };
    /** @description 1天走势图 */
    PriceChartDTO: {
      ohlc?: Record<string, any>;
    };
    /** @description 项目 */
    ProjectDocDTO: {
      id?: string;
      name?: string;
      cgId?: string;
      symbol?: string;
      twitter?: string;
      telegram?: string;
      git?: string;
      description?: string;
      url?: string;
      /** Format: float */
      score?: number;
    };
    /** @description 统一搜索响应 */
    UnifiedSearchRespDTO: {
      /**
       * Format: int64 
       * @description feed总页数
       */
      feedTotalPage?: number;
      /** @description feeds */
      feeds?: (components["schemas"]["FeedRankDocDTO"])[];
      /**
       * Format: int64 
       * @description nft总页数
       */
      nftTotalPage?: number;
      /** @description nfts */
      nfts?: (components["schemas"]["CollectionDocDTO"])[];
      wiki?: components["schemas"]["WikiDocDTO"];
      project?: components["schemas"]["ProjectDocDTO"];
      coin?: components["schemas"]["CoinSearchRespDTO"];
      /** @description 纠错 */
      spellCorrection?: (string)[];
    };
    /** @description 搜索响应 */
    FullTextSearchRespDTO: {
      /**
       * Format: int64 
       * @description 总页数
       */
      totalPage?: number;
      /** @description docs */
      docs?: (components["schemas"]["Rss3DocDTO"])[];
      /** @description nft collections */
      collections?: (components["schemas"]["Rss3CollectionRecord"])[];
      /** @description nft images */
      images?: (components["schemas"]["Rss3ImageRecord"])[];
      /** @description intention type */
      intentions?: ("PEOPLE" | "NFT" | "TRADE" | "TOKEN" | "DAPP" | "NEWS" | "TIME" | "TREND" | "QUESTION")[];
      coin?: components["schemas"]["CoinSearchRespDTO"];
    };
    JSON: Record<string, any>;
    /** @description nft collections */
    Rss3CollectionRecord: {
      contract?: string;
      network?: string;
      name?: string;
      description?: string;
      symbol?: string;
      logoURL?: string;
      /** Format: double */
      marketCap?: number;
      /** Format: double */
      volume?: number;
      /** Format: double */
      sales?: number;
      /** Format: int32 */
      itemTotal?: number;
      /** Format: int32 */
      ownerTotal?: number;
      /** Format: int32 */
      avgPrice?: number;
      imageListJSON?: components["schemas"]["JSON"];
      attributes?: string;
      propmt?: string;
    };
    /** @description docs */
    Rss3DocDTO: {
      /** @enum {string} */
      docType?: "FEED" | "NFT" | "WIKI" | "FEED_MATTERS" | "PROJECT";
      /** Format: float */
      score?: number;
      doc?: Record<string, any>;
    };
    /** @description nft images */
    Rss3ImageRecord: {
      /** Format: int64 */
      id?: number;
      contractAddress?: string;
      contractName?: string;
      tokenId?: string;
      tokenUrl?: string;
      name?: string;
      imageUrl?: string;
      attributes?: string;
      /** Format: date-time */
      timestamp?: string;
      /** Format: double */
      rarityScore?: number;
      prompt?: string;
      standard?: string;
      owner?: string;
      network?: string;
      /** Format: double */
      latestTradePrice?: number;
      /** Format: double */
      mintPrice?: number;
      nftScanUrl?: string;
      latestTradeSymbol?: string;
    };
    ProjectSearchRespDTO: {
      docs?: (components["schemas"]["ProjectDocDTO"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    NFTImageRespDTO: {
      images?: (components["schemas"]["NftImageDTO"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    /** @description NFT自动补全响应 */
    NFTAutoCompleteRespDTO: {
      option?: string;
      thumb?: string;
    };
    TodayInHistoryRespDTO: {
      date?: string;
      title?: string;
      body?: string;
      summary?: string;
      links?: (Record<string, any>)[];
    };
    NewsRespDTO: {
      docs?: (components["schemas"]["RawNewsListDocDTO"])[];
      /** Format: int64 */
      totalPage?: number;
    };
    RawNewsListDocDTO: {
      /** Format: int64 */
      id?: number;
      title?: string;
      summary?: string;
      url?: string;
      coverUrl?: string;
      /** Format: int64 */
      publishedDate?: number;
      source?: string;
      /** Format: double */
      hotScore?: number;
      aiSummary?: string;
    };
    RawNewsDetailDocDTO: {
      /** Format: int64 */
      id?: number;
      title?: string;
      summary?: string;
      url?: string;
      coverUrl?: string;
      fullText?: string;
      /** Format: int64 */
      publishedDate?: number;
      source?: string;
      /** Format: double */
      hotScore?: number;
      aiSummary?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, any>;

export interface operations {

  nft: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NFTPreviewParamDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["CollectionPreviewDocDTO"])[];
        };
      };
    };
  };
  news: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["NewsPreviewParamDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["RawNewsPreviewDoc"])[];
        };
      };
    };
  };
  feeds: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FeedPreviewParamDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["TransferDoc"])[];
        };
      };
    };
  };
  /** NFT collection搜索 */
  searchNftCollectionV2: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CollectionSearchReqDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["CollectionSearchRespDTO"];
        };
      };
    };
  };
  /** Feed搜索 */
  searchFeedV2: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["FeedSearchReqDTO"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["FeedSearchRespDTO"];
        };
      };
    };
  };
  /** Search wiki */
  search: {
    parameters: {
      query: {
        /** @description search keyword */
        keyword: string;
        /** @description pagination page, min page is 1 */
        page?: number;
        /** @description pagination size, max size is 20 */
        size?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["WikiSearchRespDTO"];
        };
      };
    };
  };
  /** Spell correction (did-you-mean) */
  spellCorrection: {
    parameters: {
      query: {
        keyword: string;
        /** @description return count */
        count?: number;
        /** @description type */
        typeParam?: "ALL" | "DOMAIN" | "CONTENT" | "WIKI" | "DAPP";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (string)[];
        };
      };
    };
  };
  /** Autocomplete */
  autoComplete: {
    parameters: {
      query: {
        keyword: string;
        /** @description return count */
        count?: number;
        /** @description type */
        typeParam?: "ALL" | "DOMAIN" | "CONTENT" | "WIKI" | "DAPP";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["AutoCompleteRespDTO"])[];
        };
      };
    };
  };
  /** Search Dapp */
  search_1: {
    parameters: {
      query: {
        /** @description search keyword, default is uniswap */
        keyword: string;
        /** @description pagination page, min page is 1 */
        page?: number;
        /** @description pagination size, max size is 20 */
        size?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["DaapSearchRespDTO"];
        };
      };
    };
  };
  /** Search content */
  searchFeed: {
    parameters: {
      query: {
        /**
         * @description search keyword, default is vitalik 
         * @example vitalik
         */
        keyword: string;
        /**
         * @description pagination page, min page is 1 
         * @example 1
         */
        page: number;
        /**
         * @description pagination size, max size is 20 
         * @example 12
         */
        size: number;
        /**
         * @description STR join with ",", available value: ALL,MIRROR,FARCASTER,XLOG,CROSSBELL,LENS,MATTERS 
         * @example ALL
         */
        platforms?: string;
        /**
         * @description STR join with ",", available value: ALL,EIP1577,BINANCE_SMART_CHAIN,ARBITRUM,ARWEAVE,AVALANCHE,ETHEREUM,FANTOM,OPTIMISM,POLYGON,XDAI,ZKSYNC,AVAX 
         * @example ALL
         */
        networks?: string;
        /**
         * @description sort by, default is NONE 
         * @example NONE
         */
        sort?: "NONE" | "TIMESTAMP_DESC";
        /**
         * @description language, default is ALL 
         * @example ALL
         */
        lang?: "ALL" | "ENGLISH" | "CHINESE" | "JAPANESE";
        /**
         * @description Timestamp, date range gte 
         * @example -1
         */
        gte?: number;
        /**
         * @description Timestamp, date range lte 
         * @example -1
         */
        lte?: number;
        /** @description author */
        author?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["FeedSearchResp4ExternalDTO"];
        };
      };
    };
  };
  /** 搜索wiki */
  search_2: {
    parameters: {
      query: {
        keyword: string;
        page: number;
        size: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["WikiSearchRespDTO"];
        };
      };
    };
  };
  /** 查询wiki profile */
  profile: {
    parameters: {
      query: {
        url: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["WikiProfileRespDTO"])[];
        };
      };
    };
  };
  /** 搜索统一API（搜索第一页使用，包含wiki，nft，feed，coin等，减少RPC call） */
  unifiedSearch: {
    parameters: {
      query: {
        keyword: string;
        pageSize?: number;
        /** @description 客户端语言，window.navigator.language */
        lang?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["UnifiedSearchRespDTO"];
        };
      };
    };
  };
  /** 纠错 (did-you-mean) */
  spellCorrection_1: {
    parameters: {
      query: {
        keyword: string;
        /** @description 纠错返回数量 */
        count?: number;
        /** @description 补全类型 */
        typeParam?: "ALL" | "DOMAIN" | "FEED" | "NFT" | "WIKI" | "DAPP";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (string)[];
        };
      };
    };
  };
  /** 搜索 */
  fullTextSearch: {
    parameters: {
      query: {
        keyword: string;
        page?: number;
        size?: number;
        docType?: "FEED" | "NFT" | "WIKI" | "COIN" | "PROJECT";
        /** @description 客户端语言，window.navigator.language */
        lang?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["FullTextSearchRespDTO"];
        };
      };
    };
  };
  /** 详情 */
  detail: {
    parameters: {
      query: {
        id: string;
        docType?: "FEED" | "NFT" | "WIKI";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Rss3DocDTO"];
        };
      };
    };
  };
  /** 自动补全 */
  autoComplete_1: {
    parameters: {
      query: {
        keyword: string;
        /** @description 自动补全返回数量 */
        count?: number;
        /** @description 补全类型 */
        typeParam?: "ALL" | "DOMAIN" | "FEED" | "NFT" | "WIKI" | "DAPP";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["AutoCompleteRespDTO"])[];
        };
      };
    };
  };
  /** Activity推荐 */
  activityRec: {
    parameters: {
      query: {
        keyword: string;
        /** @description 返回数量 */
        count?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["AutoCompleteRespDTO"])[];
        };
      };
    };
  };
  /** 搜索project */
  search_3: {
    parameters: {
      query: {
        keyword: string;
        page: number;
        size: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ProjectSearchRespDTO"];
        };
      };
    };
  };
  /** NFT图片列表 */
  nftImages: {
    parameters: {
      query: {
        contractAddress: string;
        page?: number;
        size?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["NFTImageRespDTO"];
        };
      };
    };
  };
  /** NFT图片详情 */
  nftImageDetail: {
    parameters: {
      query: {
        contractAddress: string;
        network: "ALL" | "AVAX" | "ETHEREUM" | "ARBITRUM" | "OPTIMISM" | "POLYGON" | "EIP1577" | "BINANCE_SMART_CHAIN" | "ARWEAVE" | "AVALANCHE" | "FANTOM" | "XDAI" | "ZKSYNC";
        tokenId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["NftImageDTO"];
        };
      };
    };
  };
  /** NFT自动补全 */
  autocomplete: {
    parameters: {
      query: {
        keyword: string;
        /** @description 自动补全返回数量 */
        count?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["NFTAutoCompleteRespDTO"])[];
        };
      };
    };
  };
  /** 历史上的今天 */
  todayInHistory: {
    parameters: {
      query: {
        /**
         * @description date 
         * @example 11-11
         */
        dateStr: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["TodayInHistoryRespDTO"])[];
        };
      };
    };
  };
  /** 最新NEWS */
  recentNews: {
    parameters: {
      query: {
        page: number;
        size: number;
        range: "_1D" | "_2D" | "_3D";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["NewsRespDTO"];
        };
      };
    };
  };
  /** 最热NEWS */
  hotNews: {
    parameters: {
      query: {
        page: number;
        size: number;
        range: "_1D" | "_2D" | "_3D";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["NewsRespDTO"];
        };
      };
    };
  };
  /** 新闻详情 */
  detail_1: {
    parameters: {
      query: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RawNewsDetailDocDTO"];
        };
      };
    };
  };
  /** 搜索dapp */
  search_4: {
    parameters: {
      query: {
        keyword?: string;
        page: number;
        size: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["DaapSearchRespDTO"];
        };
      };
    };
  };
  /** 币价搜索 */
  search_5: {
    parameters: {
      query: {
        /** @description keyword */
        keyword: string;
        /** @description 客户端语言，window.navigator.language */
        lang?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["CoinSearchRespDTO"];
        };
      };
    };
  };
  /** 走势图 */
  priceChart: {
    parameters: {
      query: {
        /** @description coinId */
        coinId: string;
        /** @description currency */
        currency: string;
        /** @description days, 1/7/14/30/90/180/365/max */
        days: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PriceChartDTO"];
        };
      };
    };
  };
}
