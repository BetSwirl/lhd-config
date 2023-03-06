import { AddressMapping } from '../types'

const addressMappingBlacklist: AddressMapping[] = [
  //BTC
  {
    tokenSymbol: 'RENBTC',
    tokenName: 'renBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11370/large/Bitcoin.jpg?1628072791',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
      },
    ],
  },
  {
    tokenSymbol: 'HBTC',
    tokenName: 'Huobi BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12407/large/Unknown-5.png?1599624896',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0316eb71485b0ab14103307bf65a021042c6d380',
      },
    ],
  },
  {
    tokenSymbol: 'BTC.B',
    tokenName: 'Bitcoin Avalanche Bridged (BTC.b)',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26115/large/btcb.png?1655921693',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x152b9d0fdc40c096757f570a51e494bd4b943e50',
      },
    ],
  },
  {
    tokenSymbol: 'OBTC',
    tokenName: 'BoringDAO BTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13525/large/gWzm2dr.png?1609390713',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68',
      },
    ],
  },
  {
    tokenSymbol: 'BTC2X-FLI',
    tokenName: 'BTC 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15406/large/Copy_of_BTC2x-FLI_token_logo.png?1646749417',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x0b498ff89709d3838a063f1dfa463091f9801c2b',
      },
    ],
  },
  {
    tokenSymbol: 'BTCST',
    tokenName: 'BTC Standard Hashrate Token',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14449/large/4a3IskOf_400x400.png?1616137396',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
      },
    ],
  },
  {
    tokenSymbol: 'CWBTC',
    tokenName: 'cWBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10823/large/cwbtc.png?1584331700',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
      },
    ],
  },
  {
    tokenSymbol: 'IBBTC',
    tokenName: 'Badger Interest Bearing Bitcoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15500/large/ibbtc.png?1621077589',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
      },
    ],
  },
  {
    tokenSymbol: 'SBTC',
    tokenName: 'sBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8838/large/sBTC.png?1616149734',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
      },
    ],
  },
  {
    tokenSymbol: 'TBTC',
    tokenName: 'tBTC',
    tokenLogoUrl:
      'https://assets.coingecko.com/coins/images/11224/large/0x18084fba666a33d37592fa2633fd49a74dd93a88.png?1674474504',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
      },
    ],
  },
  {
    tokenSymbol: 'BTCB',
    tokenName: 'BTCB Token',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BTCB.svg',
    tokenAddresses: [
      {
        address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        chainId: '56',
      },
    ],
  },
  //ETH
  {
    tokenSymbol: 'RETH',
    tokenName: 'Rocket Pool ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xae78736cd615f374d3085123a210448e74fc6393',
      },
    ],
  },
  {
    tokenSymbol: 'ANKRETH',
    tokenName: 'Ankr Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13403/large/aETHc.png?1625756490',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
      },
    ],
  },
  {
    tokenSymbol: 'ETHPAD',
    tokenName: 'ETHPad',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17520/large/tHAbIBQK_400x400.jpg?1628075612',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
      },
    ],
  },
  {
    tokenSymbol: 'FRXETH',
    tokenName: 'Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28284/large/JjqQ9ROz_400x400.jpeg?1669170320',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5e8422345238f34275888049021821e8e08caa1f',
      },
    ],
  },
  {
    tokenSymbol: 'SETH',
    tokenName: 'sETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/8843/large/sETH.png?1616150207',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
      },
    ],
  },
  {
    tokenSymbol: 'CETH',
    tokenName: 'cETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG?1581389598',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
      },
    ],
  },
  {
    tokenSymbol: 'DSETH',
    tokenName: 'Diversified Staked ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28751/large/dsETH-logo.png?1673929867',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x341c05c0e9b33c0e38d64de76516b2ce970bb3be',
      },
    ],
  },
  {
    tokenSymbol: 'ETH2X-FLI',
    tokenName: 'Index Coop - ETH 2x Flexible Leverage Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/14392/large/ETH2x-FLI_%281%29.png?1615875910',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd',
      },
    ],
  },
  {
    tokenSymbol: 'GST-ETH',
    tokenName: 'STEPN Green Satoshi Token on ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26528/large/gst_eth.png?1658487279',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x473037de59cf9484632f4a27b509cfe8d4a31404',
      },
    ],
  },
  {
    tokenSymbol: 'IETH',
    tokenName: 'Instadapp ETH',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25822/large/iETH_100x100.png?1654055637',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc383a3833a87009fd9597f8184979af5edfad019',
      },
    ],
  },
  {
    tokenSymbol: 'ICETH',
    tokenName: 'Interest Compounding ETH Index',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24483/large/icETH-token-logo.png?1647826356',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84',
      },
    ],
  },
  {
    tokenSymbol: 'RETH2',
    tokenName: 'rETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16570/large/red256.png?1624495231',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x20bc832ca081b91433ff6c17f85701b6e92486c5',
      },
    ],
  },
  {
    tokenSymbol: 'SETH2',
    tokenName: 'sETH2',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/16569/large/emerald256.png?1624494960',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xfe2e637202056d30016725477c5da089ab0a043a',
      },
    ],
  },
  {
    tokenSymbol: 'STETH',
    tokenName: 'Lido Staked Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      },
    ],
  },
  {
    tokenSymbol: 'SFRXETH',
    tokenName: 'Staked Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28285/large/JjqQ9ROz_400x400.jpeg?1669170466',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      },
    ],
  },
  {
    tokenSymbol: 'TETHYS',
    tokenName: 'Tethys Finance',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/22141/large/wjoZJvzA_400x400.jpg?1640927753',
    tokenAddresses: [
      {
        chainId: '1088',
        address: '0x69fdb77064ec5c84fa2f21072973eb28441f43f3',
      },
    ],
  },
  {
    tokenSymbol: 'CNHT',
    tokenName: 'CNH Tether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/5251/large/cny-tether-logo.png?1547040741',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x6e109e9dd7fa1a58bc3eff667e8e41fc3cc07aef',
      },
    ],
  },
  {
    tokenSymbol: 'XAUT',
    tokenName: 'Tether Gold',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10481/large/Tether_Gold.png?1668148656',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x68749665ff8d2d112fa859aa293f07a622782f38',
      },
    ],
  },
  {
    tokenSymbol: 'ETC',
    tokenName: 'Binance-Peg Ethereum Classic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ETC.svg',
    tokenAddresses: [
      {
        address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
        chainId: '56',
      },
    ],
  },
  //USDT
  {
    tokenSymbol: 'CUSDT',
    tokenName: 'cUSDT',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/11621/large/cUSDT.png?1592113270',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
      },
    ],
  },
  {
    tokenSymbol: 'BNBX',
    tokenName: 'Stader BNBx',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26842/large/BNBx_Logo.png?1660387908',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275',
      },
    ],
  },
  {
    tokenSymbol: 'aBNBc',
    tokenName: 'Ankr BNB Reward Bearing Certificate',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ABNBC.svg',
    tokenAddresses: [
      {
        address: '0xe85afccdafbe7f2b096f268e31cce3da8da2990a',
        chainId: '56',
      },
    ],
  },
  {
    tokenSymbol: 'BNB',
    tokenName: 'anyBNB',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/WBNB.svg',
    tokenAddresses: [
      {
        address: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        chainId: '137',
      },
    ],
  },
  {
    tokenSymbol: 'KOGE',
    tokenName: 'BNB48 Club',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13827/large/bnb48.png?1612154326',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0xe6df05ce8c8301223373cf5b969afcb1498c5528',
      },
    ],
  },
  //USDC
  {
    tokenSymbol: 'CUSDC',
    tokenName: 'cUSDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9442/large/Compound_USDC.png?1567581577',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
      },
    ],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc8871267e07408b89aa5aecc58adca5e574557f8',
      },
    ],
  },
  //XRP - REMOVED NOTHING
  //ADA
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x40a9d39aa50871df092538c5999b107f34409061',
      },
    ],
  },
  {
    tokenSymbol: 'IUSDC',
    tokenName: 'Instadapp USDC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25820/large/iUSDC_100x100.png?1654055475',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc8871267e07408b89aa5aecc58adca5e574557f8',
      },
    ],
  },
  //BUSD - NOTHING REMOVED
  //MATIC
  {
    tokenSymbol: 'MIMATIC',
    tokenName: 'MAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/15264/large/mimatic-red.png?1620281018',
    tokenAddresses: [
      {
        chainId: '137',
        address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
      },
    ],
  },
  {
    tokenSymbol: 'MATICX',
    tokenName: 'Stader MaticX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25383/large/maticx.png?1674714297',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xf03a7eb46d01d9ecaa104558c732cf82f6b6b645',
      },
    ],
  },
  {
    tokenSymbol: 'stMATIC',
    tokenName: 'Staked Matic',
    tokenLogoUrl: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/STMATIC.png',
    tokenAddresses: [
      {
        address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
        chainId: '137',
      },
    ],
  },
  //OKB- NOTHING DELETED
  //SOL
  //STETH- NOTHING REMOVED
  //DOT
  //SHIB
  //LTC
  // WE'LL NEED TO WHITELIST TRX REMOVED THESE:
  //AVAX
  {
    tokenSymbol: 'SAVAX',
    tokenName: 'BENQI Liquid Staked AVAX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23657/large/savax_blue.png?1644989825',
    tokenAddresses: [
      {
        chainId: '43114',
        address: '0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be',
      },
    ],
  },
  {
    tokenSymbol: 'SOCKS',
    tokenName: 'Unisocks',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10717/large/qFrcoiM.png?1582525244',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
      },
    ],
  },
  {
    tokenSymbol: 'CUNI',
    tokenName: 'cUNI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12696/large/compound-uni.png?1601789718',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x35a18000230da775cac24873d00ff85bccded550',
      },
    ],
  },
  //DAI
  {
    tokenSymbol: 'CDAI',
    tokenName: 'cDAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/9281/large/cDAI.png?1576467585',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
      },
    ],
  },
  {
    tokenSymbol: 'IDAI',
    tokenName: 'Instadapp DAI',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25821/large/iDAI_100x100.png?1654055549',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x40a9d39aa50871df092538c5999b107f34409061',
      },
    ],
  },
  //ATOM- NOTHING DELETED
  //LINK
  {
    tokenSymbol: 'CLINK',
    tokenName: 'cLINK',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/23943/large/iShot2022-02-25_14.35.54.png?1645770966',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xface851a4921ce59e912d19329929ce6da6eb0c7',
      },
    ],
  },
  //LEO
  //WE SHOULD WHITELIST WMR
  //WE SHOULD WHITELIST APT
  //WE SHOULD WHITELIST BCH
  //LDO
  {
    tokenSymbol: 'DUSD',
    tokenName: 'DefiDollar',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/12333/large/defidollar_logo.png?1599116360',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
      },
    ],
  },
  //WE SHOULD WHITELIST XLM
  //WE SHOULD WHITELIST HBAR
  //FIL
  {
    tokenSymbol: 'SFIL',
    tokenName: 'Filecoin Standard Full Hashrate',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/21669/large/_70BfuBY_400x400.jpg?1639706531',
    tokenAddresses: [
      {
        chainId: '56',
        address: '0x965b85d4674f64422c4898c8f8083187f02b32c0',
      },
    ],
  },
  //NEAR
  {
    tokenSymbol: 'NEARX',
    tokenName: 'Stader NearX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/27787/large/Nearx.png?1674714238',
    tokenAddresses: [
      {
        chainId: '1313161554',
        address: '0xb39eeb9e168ef6c639f5e282fef1f6bc4dcae375',
      },
    ],
  },
  //FTM
  {
    tokenSymbol: 'SFTMX',
    tokenName: 'Stader sFTMX',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/26586/large/Fantom_Light.png.png?1658900076',
    tokenAddresses: [
      {
        chainId: '250',
        address: '0xd7028092c830b5c8fce061af2e593413ebbc1fc1',
      },
    ],
  },
  //AAVE
  {
    tokenSymbol: 'LEND',
    tokenName: 'Aave [OLD]',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/1365/large/ethlend.png?1547394586',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
      },
    ],
  },
  // WE SHOULD WHITELIST FLOW
  //WE SHOULD WHITELIST EOS
  {
    tokenSymbol: 'NCR',
    tokenName: 'Neos Credits',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/17935/large/s4C4tVi.png?1629860208',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c',
      },
    ],
  },
  //WE SHOULD WHITELIST THETA
  //WE SHOULD WHITELIST XTZ
  //FRAX
  {
    tokenSymbol: 'FRXETH',
    tokenName: 'Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28284/large/JjqQ9ROz_400x400.jpeg?1669170320',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x5e8422345238f34275888049021821e8e08caa1f',
      },
    ],
  },
  {
    tokenSymbol: 'FPIS',
    tokenName: 'Frax Price Index Share',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/24944/large/fpis.png?1649485832',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc2544a32872a91f4a553b404c6950e89de901fdb',
      },
    ],
  },
  {
    tokenSymbol: 'SFRXETH',
    tokenName: 'Staked Frax Ether',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/28285/large/JjqQ9ROz_400x400.jpeg?1669170466',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      },
    ],
  },
  //CRV
  {
    tokenSymbol: 'YVE-CRVDAO',
    tokenName: 'veCRV-DAO yVault',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13065/large/yearn_veCRV.png?1612862859',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xc5bddf9843308380375a611c18b50fb9341f502a',
      },
    ],
  },
  {
    tokenSymbol: 'USDP',
    tokenName: 'USDP Stablecoin',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/13234/large/USDP.png?1606579598',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0x1456688345527be1f37e9e627da0837d6f08c925',
      },
    ],
  },
  {
    tokenSymbol: 'CWBTC',
    tokenName: 'cWBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/10823/large/cwbtc.png?1584331700',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
      },
    ],
  },
  {
    tokenSymbol: 'IWBTC',
    tokenName: 'Instadapp WBTC',
    tokenLogoUrl: 'https://assets.coingecko.com/coins/images/25784/large/iWBTC-100x100.png?1654055142',
    tokenAddresses: [
      {
        chainId: '1',
        address: '0xec363faa5c4dd0e51f3d9b5d0101263760e7cdeb',
      },
    ],
  },
]

export default addressMappingBlacklist
