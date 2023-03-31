import { ChainKey } from "../enums"
import { ChainListId } from "../enums"

// keep list sorted alphabetically
export const CHAIN_LIST_ID: { [chainKey in ChainKey]?: ChainListId } = {
    [ChainKey.APTOS_TESTNET_SANDBOX]: ChainListId.APTOS_TESTNET_SANDBOX,
    [ChainKey.APTOS_TESTNET]: ChainListId.APTOS_TESTNET,
    [ChainKey.APTOS]: ChainListId.APTOS,
    [ChainKey.ARBITRUM_RINKEBY_SANDBOX]: ChainListId.ARBITRUM_RINKEBY_SANDBOX,
    [ChainKey.ARBITRUM_RINKEBY]: ChainListId.ARBITRUM_RINKEBY,
    [ChainKey.ARBITRUM]: ChainListId.ARBITRUM,
    [ChainKey.ARCANA_TESTNET_SANDBOX]: ChainListId.ARCANA_TESTNET_SANDBOX,
    [ChainKey.ARCANA_TESTNET]: ChainListId.ARCANA_TESTNET,
    [ChainKey.AURORA_TESTNET_SANDBOX]: ChainListId.AURORA_TESTNET_SANDBOX,
    [ChainKey.AURORA_TESTNET]: ChainListId.AURORA_TESTNET,
    [ChainKey.AURORA]: ChainListId.AURORA,
    [ChainKey.AVALANCHE]: ChainListId.AVALANCHE,
    [ChainKey.BOBA_TESTNET_SANDBOX]: ChainListId.BOBA_TESTNET_SANDBOX,
    [ChainKey.BOBA_TESTNET]: ChainListId.BOBA_TESTNET,
    [ChainKey.BOBA]: ChainListId.BOBA,
    [ChainKey.BSC_TESTNET_SANDBOX]: ChainListId.BSC_TESTNET_SANDBOX,
    [ChainKey.BSC_TESTNET]: ChainListId.BSC_TESTNET,
    [ChainKey.BSC]: ChainListId.BSC,
    [ChainKey.CASTLECRUSH_TESTNET_SANDBOX]: ChainListId.CASTLECRUSH_TESTNET_SANDBOX,
    [ChainKey.CASTLECRUSH_TESTNET]: ChainListId.CASTLECRUSH_TESTNET,
    [ChainKey.CELO_TESTNET_SANDBOX]: ChainListId.CELO_TESTNET_SANDBOX,
    [ChainKey.CELO_TESTNET]: ChainListId.CELO_TESTNET,
    [ChainKey.CELO]: ChainListId.CELO,
    [ChainKey.COREDAO_TESTNET]: ChainListId.COREDAO_TESTNET,
    [ChainKey.COREDAO]: ChainListId.COREDAO,
    [ChainKey.DEXALOT_TESTNET_SANDBOX]: ChainListId.DEXALOT_TESTNET_SANDBOX,
    [ChainKey.DEXALOT_TESTNET]: ChainListId.DEXALOT_TESTNET,
    [ChainKey.DFK_TESTNET_SANDBOX]: ChainListId.DFK_TESTNET_SANDBOX,
    [ChainKey.DFK_TESTNET]: ChainListId.DFK_TESTNET,
    [ChainKey.DFK]: ChainListId.DFK,
    [ChainKey.DOS_TESTNET]: ChainListId.DOS_TESTNET,
    [ChainKey.DOS]: ChainListId.DOS,
    [ChainKey.ETHEREUM]: ChainListId.ETHEREUM,
    [ChainKey.FANTOM_TESTNET_SANDBOX]: ChainListId.FANTOM_TESTNET_SANDBOX,
    [ChainKey.FANTOM_TESTNET]: ChainListId.FANTOM_TESTNET,
    [ChainKey.FANTOM]: ChainListId.FANTOM,
    [ChainKey.FUJI_SANDBOX]: ChainListId.FUJI_SANDBOX,
    [ChainKey.FUJI]: ChainListId.FUJI,
    [ChainKey.GNOSIS_TESTNET_SANDBOX]: ChainListId.GNOSIS_TESTNET_SANDBOX,
    [ChainKey.GNOSIS_TESTNET]: ChainListId.GNOSIS_TESTNET,
    [ChainKey.GOERLI_SANDBOX]: ChainListId.GOERLI_SANDBOX,
    [ChainKey.GOERLI]: ChainListId.GOERLI,
    [ChainKey.HARMONY_TESTNET_SANDBOX]: ChainListId.HARMONY_TESTNET_SANDBOX,
    [ChainKey.HARMONY_TESTNET]: ChainListId.HARMONY_TESTNET,
    [ChainKey.HARMONY]: ChainListId.HARMONY,
    [ChainKey.KOVAN_SANDBOX]: ChainListId.KOVAN_SANDBOX,
    [ChainKey.KOVAN]: ChainListId.KOVAN,
    [ChainKey.MOONBEAM_TESTNET_SANDBOX]: ChainListId.MOONBEAM_TESTNET_SANDBOX,
    [ChainKey.MOONBEAM_TESTNET]: ChainListId.MOONBEAM_TESTNET,
    [ChainKey.MOONBEAM]: ChainListId.MOONBEAM,
    [ChainKey.MOONRIVER]: ChainListId.MOONRIVER,
    [ChainKey.MUMBAI_SANDBOX]: ChainListId.MUMBAI_SANDBOX,
    [ChainKey.MUMBAI]: ChainListId.MUMBAI,
    [ChainKey.OKX]: ChainListId.OKX,
    [ChainKey.OPTIMISM_KOVAN_SANDBOX]: ChainListId.OPTIMISM_KOVAN_SANDBOX,
    [ChainKey.OPTIMISM_KOVAN]: ChainListId.OPTIMISM_KOVAN,
    [ChainKey.OPTIMISM]: ChainListId.OPTIMISM,
    [ChainKey.POLYGON]: ChainListId.POLYGON,
    [ChainKey.PORTAL_TESTNET_SANDBOX]: ChainListId.PORTAL_TESTNET_SANDBOX,
    [ChainKey.PORTAL_TESTNET]: ChainListId.PORTAL_TESTNET,
    [ChainKey.RINKEBY_SANDBOX]: ChainListId.RINKEBY_SANDBOX,
    [ChainKey.RINKEBY]: ChainListId.RINKEBY,
    [ChainKey.SWIMMER_TESTNET_SANDBOX]: ChainListId.SWIMMER_TESTNET_SANDBOX,
    [ChainKey.SWIMMER_TESTNET]: ChainListId.SWIMMER_TESTNET,
    [ChainKey.SWIMMER]: ChainListId.SWIMMER,
    [ChainKey.ZKSYNC_TESTNET]: ChainListId.ZKSYNC_TESTNET,
    [ChainKey.ZKSYNC]: ChainListId.ZKSYNC,
}
