/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A 20-byte Ethereum address, encoded as a checksummed hex string with 0x prefix. */
  Address: { input: any; output: any; }
  /** BigDecimal decimal floating-point number, per the General Decimal Arithmetic specification. */
  BigDecimal: { input: any; output: any; }
  /** An integer of arbitrary precision, decimal-encoded. Typically a uint256. */
  BigInt: { input: any; output: any; }
  /** An array of byte, encoded as a lowercase hex string with 0x prefix. */
  Bytes: { input: any; output: any; }
  /**
   * A point in time, encoded per RFC-3999. Typically these will be in second precision,
   * just like the blockchain, and in UTC.
   */
  Time: { input: any; output: any; }
};

export type AftermarketDevice = Node & {
  __typename?: 'AftermarketDevice';
  /** The Ethereum address for the device. */
  address: Scalars['Address']['output'];
  /** The beneficiary for this device, who receives any associated rewards. Defaults to the owner. */
  beneficiary: Scalars['Address']['output'];
  /**
   * The block timestamp at which this device was claimed, if it has been claimed. Devices must be
   * claimed before pairing.
   */
  claimedAt?: Maybe<Scalars['Time']['output']>;
  /** Extended Unique Identifier (EUI) for LoRa devices. */
  devEUI?: Maybe<Scalars['String']['output']>;
  /** The earnings attached to the aftermarket device */
  earnings?: Maybe<AftermarketDeviceEarnings>;
  /** Manufacturer-specific hardware revision. May not always be present. */
  hardwareRevision?: Maybe<Scalars['String']['output']>;
  /** An opaque global identifier for this aftermarket device. */
  id: Scalars['ID']['output'];
  /** The Image Url of the device */
  image: Scalars['String']['output'];
  /** The International Mobile Equipment Identity (IMEI) for the device. */
  imei?: Maybe<Scalars['String']['output']>;
  /** The manufacturer of this aftermarket device. */
  manufacturer: Manufacturer;
  /** The block timestamp at which this device was minted. */
  mintedAt: Scalars['Time']['output'];
  /** Encoded name of the device */
  name: Scalars['String']['output'];
  /** The Ethereum address of the owner of the device. */
  owner: Scalars['Address']['output'];
  /** The block timestamp at which this device was paired, if it is presently paired. */
  pairedAt?: Maybe<Scalars['Time']['output']>;
  /**
   * The serial number on the side of the device. For AutoPis this is a UUID; for Macarons it is
   * a long decimal number.
   */
  serial?: Maybe<Scalars['String']['output']>;
  /** The DID for this aftermarket device's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The ERC-721 token id for the device. */
  tokenId: Scalars['Int']['output'];
  /** The vehicle, if any, with which the device is paired. */
  vehicle?: Maybe<Vehicle>;
};

/** The AftermarketDeviceBy input is used to specify a unique aftermarket device to query. */
export type AftermarketDeviceBy = {
  /** address of the aftermarket device */
  address?: InputMaybe<Scalars['Address']['input']>;
  /** Extended Unique Identifier (EUI) for LoRa devices if available */
  devEUI?: InputMaybe<Scalars['String']['input']>;
  /** The International Mobile Equipment Identity (IMEI) for the device if available */
  imei?: InputMaybe<Scalars['String']['input']>;
  /** serial number of the aftermarket device */
  serial?: InputMaybe<Scalars['String']['input']>;
  /** The DID of the aftermarket device in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  /** token id of the aftermarket device NFT */
  tokenId?: InputMaybe<Scalars['Int']['input']>;
};

/** The Connection type for AftermarketDevice. */
export type AftermarketDeviceConnection = {
  __typename?: 'AftermarketDeviceConnection';
  edges: Array<AftermarketDeviceEdge>;
  nodes: Array<AftermarketDevice>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AftermarketDeviceEarnings = {
  __typename?: 'AftermarketDeviceEarnings';
  history: EarningsConnection;
  totalTokens: Scalars['BigDecimal']['output'];
};


export type AftermarketDeviceEarningsHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An edge in a AftermarketDeviceConnection. */
export type AftermarketDeviceEdge = {
  __typename?: 'AftermarketDeviceEdge';
  cursor: Scalars['String']['output'];
  node: AftermarketDevice;
};

/**
 * The AftermarketDevicesFilter input is used to specify filtering criteria for querying aftermarket devices.
 * Aftermarket devices must match all of the specified criteria.
 */
export type AftermarketDevicesFilter = {
  beneficiary?: InputMaybe<Scalars['Address']['input']>;
  manufacturerId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter for aftermarket devices owned by this address. */
  owner?: InputMaybe<Scalars['Address']['input']>;
};

export type Connection = {
  __typename?: 'Connection';
  /** The address of the connection. This is the most commonly used identifier. */
  address: Scalars['Address']['output'];
  /** The block timestamp for the mint of the connection. */
  mintedAt: Scalars['Time']['output'];
  /** The name of the connection. This can be at most 32 bytes long. */
  name: Scalars['String']['output'];
  /** The owner of the connection. Connections are transferable, so this may change over time. */
  owner: Scalars['Address']['output'];
  /** The DID for this connection's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The token id of the connection as an NFT. This tends to be very large. */
  tokenId: Scalars['BigInt']['output'];
};

export type ConnectionBy = {
  address?: InputMaybe<Scalars['Address']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** The DID of the connection in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
};

export type ConnectionConnection = {
  __typename?: 'ConnectionConnection';
  edges: Array<ConnectionEdge>;
  nodes: Array<Connection>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConnectionEdge = {
  __typename?: 'ConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Connection;
};

/** Represents a DIMO Canonical Name. This is a unique identifier for a vehicle. */
export type Dcn = Node & {
  __typename?: 'DCN';
  /** The block timestamp at which the domain will cease to be valid. */
  expiresAt?: Maybe<Scalars['Time']['output']>;
  /** An opaque global identifier for this DCN. */
  id: Scalars['ID']['output'];
  /** The block timestamp at which the domain was created. */
  mintedAt: Scalars['Time']['output'];
  /** Human readable name, if any, for the domain; for example, "reddy.dimo". */
  name?: Maybe<Scalars['String']['output']>;
  /** The namehash of the domain. */
  node: Scalars['Bytes']['output'];
  /** Ethereum address of domain owner. */
  owner: Scalars['Address']['output'];
  /** The DID for this DCN's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The token id for the domain. This is simply the node reinterpreted as a uint256. */
  tokenId: Scalars['BigInt']['output'];
  /** Vehicle, if any, to which the domain is attached. */
  vehicle?: Maybe<Vehicle>;
};

/** Input used to specify a unique DCN to query. */
export type DcnBy = {
  name?: InputMaybe<Scalars['String']['input']>;
  node?: InputMaybe<Scalars['Bytes']['input']>;
  /** The DID of the DCN in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
};

/** The Connection type for DCN. */
export type DcnConnection = {
  __typename?: 'DCNConnection';
  /** A list of edges. */
  edges: Array<DcnEdge>;
  /** A list of nodes in the connection */
  nodes: Array<Dcn>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total count of DCNs in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a DCNConnection. */
export type DcnEdge = {
  __typename?: 'DCNEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Dcn;
};

/** Filter for DCN. */
export type DcnFilter = {
  /** Filter for DCN owned by this address. */
  owner?: InputMaybe<Scalars['Address']['input']>;
};

export type Definition = {
  __typename?: 'Definition';
  id?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type DeveloperLicense = {
  __typename?: 'DeveloperLicense';
  /** A human-readable alias for this license. Unique among all licenses if present. */
  alias?: Maybe<Scalars['String']['output']>;
  /** Serves as the client id for OAuth as well as the address of the associated contract. */
  clientId: Scalars['Address']['output'];
  /** The block timestamp for the transaction that minted this license. */
  mintedAt: Scalars['Time']['output'];
  /** The owner of the license. A single owner can own multiple licenses. */
  owner: Scalars['Address']['output'];
  redirectURIs: RedirectUriConnection;
  signers: SignerConnection;
  /** The DID for this license's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The token id of the license as an NFT. */
  tokenId: Scalars['Int']['output'];
};


export type DeveloperLicenseRedirectUrIsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DeveloperLicenseSignersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DeveloperLicenseBy = {
  alias?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['Address']['input']>;
  /** The DID of the developer license in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['Int']['input']>;
};

export type DeveloperLicenseConnection = {
  __typename?: 'DeveloperLicenseConnection';
  edges: Array<DeveloperLicenseEdge>;
  nodes: Array<DeveloperLicense>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DeveloperLicenseEdge = {
  __typename?: 'DeveloperLicenseEdge';
  cursor: Scalars['String']['output'];
  node: DeveloperLicense;
};

export type DeveloperLicenseFilterBy = {
  owner?: InputMaybe<Scalars['Address']['input']>;
  signer?: InputMaybe<Scalars['Address']['input']>;
};

/** Represents a Device Definition. */
export type DeviceDefinition = {
  __typename?: 'DeviceDefinition';
  /** Device attributes for this device definition. */
  attributes: Array<DeviceDefinitionAttribute>;
  /** Device definition id for this device definition. */
  deviceDefinitionId: Scalars['String']['output'];
  /** Device type for this device definition. */
  deviceType?: Maybe<Scalars['String']['output']>;
  /** Image URI for this device definition. */
  imageURI?: Maybe<Scalars['String']['output']>;
  /** Legacy id for this device definition. Newer device definitions may not have one. */
  legacyId?: Maybe<Scalars['String']['output']>;
  /** Manufacturer for this device definition. */
  manufacturer?: Maybe<Manufacturer>;
  /** Model for this device definition. */
  model: Scalars['String']['output'];
  /** Year for this device definition. */
  year: Scalars['Int']['output'];
};

export type DeviceDefinitionAttribute = {
  __typename?: 'DeviceDefinitionAttribute';
  /** Name for this device definition. */
  name: Scalars['String']['output'];
  /** Value for this device definition. */
  value: Scalars['String']['output'];
};

/** Input used to specify a unique Device Definition to query. */
export type DeviceDefinitionBy = {
  /** The id for the device definition. */
  id: Scalars['String']['input'];
};

/** Represents a Device Definition. */
export type DeviceDefinitionConnection = {
  __typename?: 'DeviceDefinitionConnection';
  /** A list of edges. */
  edges: Array<DeviceDefinitionEdge>;
  /** A list of nodes in the connection */
  nodes: Array<DeviceDefinition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total count of Device Definitions in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a Device Definition Connection. */
export type DeviceDefinitionEdge = {
  __typename?: 'DeviceDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DeviceDefinition;
};

/** Filter for Device Definition. */
export type DeviceDefinitionFilter = {
  /**
   * Model filters for device definition that are of the given model.
   * This filter performs a case insensitive match.
   */
  model?: InputMaybe<Scalars['String']['input']>;
  /** Year filters for device definition that are of the given year. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Earning = {
  __typename?: 'Earning';
  /** AftermarketDevice connected to vehicle */
  aftermarketDevice?: Maybe<AftermarketDevice>;
  /** Tokens earned by aftermarketDevice */
  aftermarketDeviceTokens: Scalars['BigDecimal']['output'];
  /** Address of Beneficiary that received reward */
  beneficiary: Scalars['Address']['output'];
  /** Consecutive period of which vehicle was connected */
  connectionStreak?: Maybe<Scalars['Int']['output']>;
  /** When the token was earned */
  sentAt: Scalars['Time']['output'];
  /** Tokens earned for connection period */
  streakTokens: Scalars['BigDecimal']['output'];
  /** SyntheticDevice connected to vehicle */
  syntheticDevice?: Maybe<SyntheticDevice>;
  /** Tokens earned by SyntheticDevice */
  syntheticDeviceTokens: Scalars['BigDecimal']['output'];
  /** Vehicle reward is assigned to */
  vehicle?: Maybe<Vehicle>;
  /** Week reward was issued */
  week: Scalars['Int']['output'];
};

export type EarningsConnection = {
  __typename?: 'EarningsConnection';
  edges: Array<EarningsEdge>;
  nodes: Array<Earning>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EarningsEdge = {
  __typename?: 'EarningsEdge';
  cursor: Scalars['String']['output'];
  node: Earning;
};

export type Manufacturer = Node & {
  __typename?: 'Manufacturer';
  /** A Relay-style connection listing any aftermarket devices associated with manufacturer. */
  aftermarketDevices: AftermarketDeviceConnection;
  /** List device definitions under this manufacturer. */
  deviceDefinitions: DeviceDefinitionConnection;
  /** An opaque global identifier for this manufacturer. */
  id: Scalars['ID']['output'];
  /** The block timestamp at which this manufacturer was minted. */
  mintedAt: Scalars['Time']['output'];
  /** The name of the manufacturer. */
  name: Scalars['String']['output'];
  /** The Ethereum address of the owner of this manufacturer. */
  owner: Scalars['Address']['output'];
  /** Id of the Tableland table holding the manufacturer's device definitions. */
  tableId?: Maybe<Scalars['Int']['output']>;
  /** The DID for this manufacturer's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The ERC-721 token id for the manufacturer. */
  tokenId: Scalars['Int']['output'];
};


export type ManufacturerAftermarketDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<AftermarketDevicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ManufacturerDeviceDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<DeviceDefinitionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ManufacturerBy = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The DID of the manufacturer in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['Int']['input']>;
};

/** The Connection type for Manufacturer. */
export type ManufacturerConnection = {
  __typename?: 'ManufacturerConnection';
  edges: Array<ManufacturerEdge>;
  nodes: Array<Manufacturer>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** An edge in a ManufacturerConnection. */
export type ManufacturerEdge = {
  __typename?: 'ManufacturerEdge';
  cursor: Scalars['String']['output'];
  node: Manufacturer;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Privilege = {
  __typename?: 'Privilege';
  /** The block timestamp at which the privilege expires. */
  expiresAt: Scalars['Time']['output'];
  /** The id of the privilege. */
  id: Scalars['Int']['output'];
  /** The block timestamp at which this privilege was last set. */
  setAt: Scalars['Time']['output'];
  /** The user holding the privilege. */
  user: Scalars['Address']['output'];
};

export type PrivilegeEdge = {
  __typename?: 'PrivilegeEdge';
  cursor: Scalars['String']['output'];
  node: Privilege;
};

export type PrivilegeFilterBy = {
  privilegeId?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['Address']['input']>;
};

/** The Connection type for Privileges. */
export type PrivilegesConnection = {
  __typename?: 'PrivilegesConnection';
  edges: Array<PrivilegeEdge>;
  nodes: Array<Privilege>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** The root query type for the GraphQL schema. */
export type Query = {
  __typename?: 'Query';
  /** View a particular aftermarket device. */
  aftermarketDevice: AftermarketDevice;
  /**
   * List aftermarket devices.
   * Ordered by token id, descending.
   */
  aftermarketDevices: AftermarketDeviceConnection;
  /** Retrieve a particular connection. */
  connection: Connection;
  /** List connection licenses. Sorts by minting time, descending. */
  connections: ConnectionConnection;
  /** View a particular DIMO Canonical Name. */
  dcn: Dcn;
  /** List DIMO Canonical Names. */
  dcns: DcnConnection;
  /** Retrieve a particular developer license. */
  developerLicense: DeveloperLicense;
  /** List developer licenses. Sorts by token id, descending. */
  developerLicenses: DeveloperLicenseConnection;
  /** View a particular device definition. */
  deviceDefinition: DeviceDefinition;
  /** View a particular manufacturer. */
  manufacturer: Manufacturer;
  /**
   * List minted manufacturers.
   *
   * These are always ordered by Name in ascending order. Returns all of them
   */
  manufacturers: ManufacturerConnection;
  /** View a particular node. */
  node?: Maybe<Node>;
  /** List rewards for a user. */
  rewards?: Maybe<UserRewards>;
  /** List developer licenses. Sorts by token id, descending. */
  stakes: StakeConnection;
  /** View a particular synthetic device. */
  syntheticDevice: SyntheticDevice;
  /**
   * List synthetic devices.
   * Ordered by token id, descending.
   */
  syntheticDevices: SyntheticDeviceConnection;
  /** View a particular vehicle. */
  vehicle: Vehicle;
  /**
   * List minted vehicles.
   *
   * For now, these are always ordered by token ID in descending order.
   */
  vehicles: VehicleConnection;
};


/** The root query type for the GraphQL schema. */
export type QueryAftermarketDeviceArgs = {
  by: AftermarketDeviceBy;
};


/** The root query type for the GraphQL schema. */
export type QueryAftermarketDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<AftermarketDevicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryConnectionArgs = {
  by: ConnectionBy;
};


/** The root query type for the GraphQL schema. */
export type QueryConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryDcnArgs = {
  by: DcnBy;
};


/** The root query type for the GraphQL schema. */
export type QueryDcnsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<DcnFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryDeveloperLicenseArgs = {
  by: DeveloperLicenseBy;
};


/** The root query type for the GraphQL schema. */
export type QueryDeveloperLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<DeveloperLicenseFilterBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryDeviceDefinitionArgs = {
  by: DeviceDefinitionBy;
};


/** The root query type for the GraphQL schema. */
export type QueryManufacturerArgs = {
  by: ManufacturerBy;
};


/** The root query type for the GraphQL schema. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The root query type for the GraphQL schema. */
export type QueryRewardsArgs = {
  user: Scalars['Address']['input'];
};


/** The root query type for the GraphQL schema. */
export type QueryStakesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<StakeFilterBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QuerySyntheticDeviceArgs = {
  by: SyntheticDeviceBy;
};


/** The root query type for the GraphQL schema. */
export type QuerySyntheticDevicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<SyntheticDevicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryVehicleArgs = {
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type for the GraphQL schema. */
export type QueryVehiclesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<VehiclesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RedirectUri = {
  __typename?: 'RedirectURI';
  enabledAt: Scalars['Time']['output'];
  uri: Scalars['String']['output'];
};

export type RedirectUriConnection = {
  __typename?: 'RedirectURIConnection';
  edges: Array<RedirectUriEdge>;
  nodes: Array<RedirectUri>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RedirectUriEdge = {
  __typename?: 'RedirectURIEdge';
  cursor: Scalars['String']['output'];
  node: RedirectUri;
};

export type Sacd = {
  __typename?: 'Sacd';
  /** The block timestamp at which this permission was set. */
  createdAt: Scalars['Time']['output'];
  /** The block timestamp at which the permission expires. */
  expiresAt: Scalars['Time']['output'];
  /** Recipient of sacd permission grant */
  grantee: Scalars['Address']['output'];
  /** Hex string of permissions */
  permissions: Scalars['String']['output'];
  /** Permission source */
  source: Scalars['String']['output'];
};

/** The Connection type for Sacds. */
export type SacdConnection = {
  __typename?: 'SacdConnection';
  edges: Array<SacdEdge>;
  nodes: Array<Sacd>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SacdEdge = {
  __typename?: 'SacdEdge';
  cursor: Scalars['String']['output'];
  node: Sacd;
};

export type Signer = {
  __typename?: 'Signer';
  address: Scalars['Address']['output'];
  enabledAt: Scalars['Time']['output'];
};

export type SignerConnection = {
  __typename?: 'SignerConnection';
  edges: Array<SignerEdge>;
  nodes: Array<Signer>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SignerEdge = {
  __typename?: 'SignerEdge';
  cursor: Scalars['String']['output'];
  node: Signer;
};

export type Stake = {
  __typename?: 'Stake';
  /** The amount of $DIMO staked. */
  amount: Scalars['BigDecimal']['output'];
  /** The block timestamp after which the staked tokens will become or did become unlocked. */
  endsAt: Scalars['Time']['output'];
  /**
   * The level of the stake. Presently, the levels are 0, 1, and 2. These translate
   * to Levels 2, 3, and 4 in DIP-2. See https://docs.dimo.org/governance/improvement-proposals/dip2
   */
  level: Scalars['Int']['output'];
  /** The owner of the license. A single owner can own multiple licenses. */
  owner: Scalars['Address']['output'];
  /**
   * The number of points that the stake contributes to a vehicle's weekly total. The process
   * by which points become tokens is described in DIP-2.
   */
  points: Scalars['Int']['output'];
  /** The block timestamp for the transaction that created this stake. */
  stakedAt: Scalars['Time']['output'];
  /** The DID for this stake's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The token id of the license as an NFT. */
  tokenId: Scalars['Int']['output'];
  /** The vehicle to which the stake is attached, if it is attached. */
  vehicle?: Maybe<Vehicle>;
  /** The block timestamp at which the tokens were withdrawn, if they have been withdrawn. */
  withdrawnAt?: Maybe<Scalars['Time']['output']>;
};

export type StakeConnection = {
  __typename?: 'StakeConnection';
  edges: Array<StakeEdge>;
  nodes: Array<Stake>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StakeEdge = {
  __typename?: 'StakeEdge';
  cursor: Scalars['String']['output'];
  node: Stake;
};

export type StakeFilterBy = {
  /**
   * Filter stakes based on attachability. A stake is considered attachable if it
   * is not presently attached to a vehicle and has not yet ended.
   */
  attachable?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Address']['input']>;
};

/** The SyntheticDevice is a software connection established to connect the vehicle to the DIMO network. */
export type SyntheticDevice = Node & {
  __typename?: 'SyntheticDevice';
  /** The Ethereum address for the device. */
  address: Scalars['Address']['output'];
  /** The parent connection for the synthetic device. */
  connection: Connection;
  /** An opaque global identifier for this syntheticDevice. */
  id: Scalars['ID']['output'];
  /**
   * Type of integration for the synthetic device.
   * @deprecated Use the `connection` field instead. For newer synthetic devices, this field will be zero.
   */
  integrationId: Scalars['Int']['output'];
  /** The block timestamp at which this device was minted. */
  mintedAt: Scalars['Time']['output'];
  /** Encoded name of the device */
  name: Scalars['String']['output'];
  /** The DID for this synthetic device's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The ERC-721 token id for the device. */
  tokenId: Scalars['Int']['output'];
  /** The vehicle with which the synthetic device is paired. */
  vehicle: Vehicle;
};

/** The SyntheticDeviceBy input is used to specify a unique synthetic device to query. */
export type SyntheticDeviceBy = {
  /** The Ethereum address for the synthetic device. */
  address?: InputMaybe<Scalars['Address']['input']>;
  /** The DID of the synthetic device in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID?: InputMaybe<Scalars['String']['input']>;
  /** The token id for the synthetic device. */
  tokenId?: InputMaybe<Scalars['Int']['input']>;
};

/** The Connection type for SyntheticDevice. */
export type SyntheticDeviceConnection = {
  __typename?: 'SyntheticDeviceConnection';
  /** A list of edges. */
  edges: Array<SyntheticDeviceEdge>;
  /** A list of nodes in the connection (without going through the `edges` field). */
  nodes: Array<SyntheticDevice>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The total count of SyntheticDevices in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a SytheticDeviceConnection. */
export type SyntheticDeviceEdge = {
  __typename?: 'SyntheticDeviceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SyntheticDevice;
};

/**
 * The SyntheticDevicesFilter input is used to specify filtering criteria for querying synthetic devices.
 * Synthetic devices must match all of the specified criteria.
 */
export type SyntheticDevicesFilter = {
  /** Filter for synthetic devices with this integration id. */
  integrationId?: InputMaybe<Scalars['Int']['input']>;
  /** Filter for synthetic devices owned by this address. */
  owner?: InputMaybe<Scalars['Address']['input']>;
};

export type UserRewards = {
  __typename?: 'UserRewards';
  history: EarningsConnection;
  totalTokens: Scalars['BigDecimal']['output'];
};


export type UserRewardsHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Vehicle = Node & {
  __typename?: 'Vehicle';
  /** The paired aftermarket device, if any. */
  aftermarketDevice?: Maybe<AftermarketDevice>;
  dataURI: Scalars['String']['output'];
  dcn?: Maybe<Dcn>;
  /**
   * The device definition for this vehicle; which includes make, model, and year among
   * other things.
   */
  definition?: Maybe<Definition>;
  earnings?: Maybe<VehicleEarnings>;
  /** An opaque global identifier for this vehicle. */
  id: Scalars['ID']['output'];
  /** @deprecated Use `imageURI` instead. */
  image: Scalars['String']['output'];
  /** A URI containing an image for the vehicle. */
  imageURI: Scalars['String']['output'];
  /** The manufacturer of this vehicle. */
  manufacturer: Manufacturer;
  /** The block timestamp at which this vehicle was minted. */
  mintedAt: Scalars['Time']['output'];
  /** Encoded name of the device */
  name: Scalars['String']['output'];
  /** The Ethereum address of the owner of this vehicle. */
  owner: Scalars['Address']['output'];
  /** A Relay-style connection listing any active privilege grants on this vehicle. */
  privileges: PrivilegesConnection;
  /** A Relay-style connection listing any active SACD permission grants on this vehicle. */
  sacds: SacdConnection;
  stake?: Maybe<Stake>;
  /** The paired synthetic device, if any. */
  syntheticDevice?: Maybe<SyntheticDevice>;
  /** The DID for this vehicle's token ID in the format did:erc721:<chainID>:<contractAddress>:<tokenId> */
  tokenDID: Scalars['String']['output'];
  /** The ERC-721 token id for the vehicle. */
  tokenId: Scalars['Int']['output'];
};


export type VehiclePrivilegesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<PrivilegeFilterBy>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type VehicleSacdsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The Connection type for Vehicle. */
export type VehicleConnection = {
  __typename?: 'VehicleConnection';
  edges: Array<VehicleEdge>;
  nodes: Array<Vehicle>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type VehicleEarnings = {
  __typename?: 'VehicleEarnings';
  history: EarningsConnection;
  totalTokens: Scalars['BigDecimal']['output'];
};


export type VehicleEarningsHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** An edge in a VehicleConnection. */
export type VehicleEdge = {
  __typename?: 'VehicleEdge';
  cursor: Scalars['String']['output'];
  node: Vehicle;
};

/**
 * The VehiclesFilter input is used to specify filtering criteria for querying vehicles.
 * Vehicles must match all of the specified criteria.
 */
export type VehiclesFilter = {
  /** Filter for vehicles by device definition id. */
  deviceDefinitionId?: InputMaybe<Scalars['String']['input']>;
  /** Make filters for vehicles that are of the given make. */
  make?: InputMaybe<Scalars['String']['input']>;
  /** Filter for vehicles produced by a particular manufacturer, specified by manufacturer token id. */
  manufacturerTokenId?: InputMaybe<Scalars['Int']['input']>;
  /** Model filters for vehicles that are of the given model. */
  model?: InputMaybe<Scalars['String']['input']>;
  /** Owner filters for vehicles that this address owns. */
  owner?: InputMaybe<Scalars['Address']['input']>;
  /**
   * Privileged filters for vehicles to which the given address has access. This includes vehicles
   * that this address owns.
   */
  privileged?: InputMaybe<Scalars['Address']['input']>;
  /** Year filters for vehicles that are of the given year. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type GetVehicleQueryVariables = Exact<{
  tokenId: Scalars['Int']['input'];
}>;


export type GetVehicleQuery = { __typename?: 'Query', vehicle: { __typename?: 'Vehicle', tokenId: number, owner: any, name: string, mintedAt: any, dcn?: { __typename?: 'DCN', id: string, name?: string | null } | null, definition?: { __typename?: 'Definition', make?: string | null, model?: string | null, year?: number | null } | null, aftermarketDevice?: { __typename?: 'AftermarketDevice', tokenId: number, tokenDID: string, serial?: string | null, owner: any, pairedAt?: any | null, manufacturer: { __typename?: 'Manufacturer', name: string } } | null, syntheticDevice?: { __typename?: 'SyntheticDevice', tokenId: number } | null } };

export type GetVehiclesByOwnerQueryVariables = Exact<{
  owner: Scalars['Address']['input'];
  first: Scalars['Int']['input'];
}>;


export type GetVehiclesByOwnerQuery = { __typename?: 'Query', vehicles: { __typename?: 'VehicleConnection', totalCount: number, edges: Array<{ __typename?: 'VehicleEdge', node: { __typename?: 'Vehicle', tokenId: number, owner: any, mintedAt: any, definition?: { __typename?: 'Definition', make?: string | null, model?: string | null, year?: number | null } | null, aftermarketDevice?: { __typename?: 'AftermarketDevice', tokenId: number, tokenDID: string, serial?: string | null, owner: any, pairedAt?: any | null, manufacturer: { __typename?: 'Manufacturer', name: string } } | null } }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetVehicleDocument = new TypedDocumentString(`
    query GetVehicle($tokenId: Int!) {
  vehicle(tokenId: $tokenId) {
    tokenId
    owner
    dcn {
      id
      name
    }
    name
    mintedAt
    definition {
      make
      model
      year
    }
    aftermarketDevice {
      tokenId
      tokenDID
      serial
      owner
      pairedAt
      manufacturer {
        name
      }
    }
    syntheticDevice {
      tokenId
    }
  }
}
    `) as unknown as TypedDocumentString<GetVehicleQuery, GetVehicleQueryVariables>;
export const GetVehiclesByOwnerDocument = new TypedDocumentString(`
    query GetVehiclesByOwner($owner: Address!, $first: Int!) {
  vehicles(filterBy: {owner: $owner}, first: $first) {
    totalCount
    edges {
      node {
        tokenId
        owner
        mintedAt
        definition {
          make
          model
          year
        }
        aftermarketDevice {
          tokenId
          tokenDID
          serial
          owner
          pairedAt
          manufacturer {
            name
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetVehiclesByOwnerQuery, GetVehiclesByOwnerQueryVariables>;