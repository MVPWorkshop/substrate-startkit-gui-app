import * as GeneratorUtil from '../shared/utils/generator.util';
import { EPallets } from '../shared/types/pallets.types';
import { DynamicObject } from '../shared/types/util.types';
import { IPalletResponse } from '../services/pallets/palletsService.types';
const mockedPalletConfigs = {
  'pallet-assets': {
    name: 'pallet-assets',
    size: 16200,
    downloads: 0,
    packageName: 'pallet-assets',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A simple, secure module for dealing with fungible assets.\nThe Assets module provides functionality for asset management of fungible asset classes with a fixed supply, including:\n- Asset Issuance\n- Asset Transfer\n- Asset Destruction',
    shortDescription: 'FRAME asset management pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'ASSETS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-atomic-swap': {
    name: 'pallet-atomic-swap',
    size: 3120,
    downloads: 0,
    packageName: 'pallet-atomic-swap',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A module for atomically sending funds from an origin to a target.\nA proof is used to allow the target to approve (claim) the swap. If the swap is not claimed within a specified duration of time, the sender may cancel it.',
    shortDescription: 'FRAME atomic swap pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: []
    }
  },
  'pallet-aura': {
    name: 'pallet-aura',
    size: 5078,
    downloads: 0,
    packageName: 'pallet-aura',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Aura module extends Aura consensus by managing offline reporting.',
    shortDescription: 'FRAME AURA consensus pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-timestamp'
      ]
    }
  },
  'pallet-authority-discovery': {
    name: 'pallet-authority-discovery',
    size: 3840,
    downloads: 0,
    packageName: 'pallet-authority-discovery',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'This module is used by the client/authority-discovery to retrieve the current set of authorities.',
    shortDescription: 'FRAME pallet for authority discovery',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-session'
      ],
      usedBy: [
        'pallet-im-online'
      ]
    }
  },
  'pallet-authorship': {
    name: 'pallet-authorship',
    size: 7270,
    downloads: 0,
    packageName: 'pallet-authorship',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Authorship tracking for FRAME runtimes.\nThis tracks the current author of the block and recent uncles.',
    shortDescription: 'Block and Uncle Author tracking for the FRAME',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-babe',
        'pallet-session'
      ],
      usedBy: [
        'pallet-babe',
        'pallet-staking',
        'pallet-grandpa',
        'pallet-im-online'
      ]
    }
  },
  'pallet-babe': {
    name: 'pallet-babe',
    size: 11900,
    downloads: 0,
    packageName: 'pallet-babe',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Consensus extension module for BABE consensus.\nCollects on-chain randomness from VRF outputs and manages epoch transitions.',
    shortDescription: 'FRAME pallet for BABE consensus',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-session',
        'pallet-authorship',
        'pallet-timestamp'
      ],
      usedBy: [
        'pallet-session',
        'pallet-authorship'
      ]
    }
  },
  'pallet-balances': {
    name: 'pallet-balances',
    size: 20000,
    downloads: 0,
    packageName: 'pallet-balances',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Balances module provides functionality for handling accounts and balances.\nThe Balances module provides functions for:\n- Getting and setting free balances.\n- Retrieving total, reserved, and unreserved balances.\n- Repatriating a reserved balance to a beneficiary account that exists.\n- Transferring a balance between accounts (when not reserved).\n- Slashing an account balance.\n- Account creation and removal.\n- Managing total issuance.\n- Setting and managing locks.',
    shortDescription: 'FRAME pallet to manage balances',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'ACCOUNTS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-transaction-payment',
        'pallet-nicks',
        'pallet-contracts',
        'pallet-recovery',
        'pallet-vesting',
        'pallet-assets',
        'pallet-offences',
        'pallet-staking',
        'pallet-indices',
        'pallet-elections-phragmen',
        'pallet-elections',
        'pallet-treasury',
        'pallet-identity',
        'pallet-democracy',
        'pallet-society',
        'pallet-scored-pool',
        'pallet-evm',
        'pallet-proxy'
      ]
    }
  },
  'pallet-collective': {
    name: 'pallet-collective',
    size: 15500,
    downloads: 0,
    packageName: 'pallet-collective',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Collective system: Members of a set of account IDs can make their collective feelings known through dispatched calls from one of two specialized origins.\nThe membership can be provided in one of two ways: either directly, using the Root-dispatchable function set_members, or indirectly, through implementing the ChangeMembers. The pallet assumes that the amount of members stays at or below MaxMembers for its weight calculations, but enforces this neither in set_members nor in change_members_sorted.\nA "prime" member may be set to help determine the default vote behavior based on chain config. If PreimDefaultVote is used, the prime vote acts as the default vote in case of any abstentions after the voting period. If MoreThanMajorityThenPrimeDefaultVote is used, then abstentations will first follow the majority of the collective voting, and then the prime member.\nVoting happens through motions comprising a proposal (i.e. a curried dispatchable) plus a number of approvals required for it to pass and be called. Motions are open for members to vote on for a minimum period given by MotionDuration. As soon as the needed number of approvals is given, the motion is closed and executed. If the number of approvals is not reached during the voting period, then close may be called by any account in order to force the end the motion explicitly. If a prime member is defined then their vote is used in place of any abstentions and the proposal is executed if there are enough approvals counting the new votes.\nIf there are not, or if no prime is set, then the motion is dropped without being executed.',
    shortDescription: 'FRAME pallet collective',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-elections-phragmen'
      ]
    }
  },
  'pallet-contracts': {
    name: 'pallet-contracts',
    size: 75500,
    downloads: 0,
    packageName: 'pallet-contracts',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'FRAME pallet for WASM contracts.\nThe Contract module provides functionality for the runtime to deploy and execute WebAssembly smart-contracts.\nThis module extends accounts based on the `Currency` trait to have smart-contract functionality. It can be used with other modules that implement accounts based on `Currency`. These "smart-contract accounts" have the ability to instantiate smart-contracts and make calls to other contract and non-contract accounts.\nThe smart-contract code is stored once in a `code_cache`, and later retrievable',
    shortDescription: 'FRAME pallet for WASM contracts',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'SMART_CONTRACTS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-transaction-payment',
        'pallet-balances',
        'pallet-timestamp',
        'pallet-randomness-collective-flip'
      ],
      usedBy: []
    }
  },
  'pallet-democracy': {
    name: 'pallet-democracy',
    size: 28700,
    downloads: 0,
    packageName: 'pallet-democracy',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Democracy pallet handles the administration of general stakeholder voting.\nThere are two different queues that a proposal can be added to before it becomes a referendum\n1) the proposal queue consisting of all public proposals and\n2) the external queue consisting of a single proposal that originates from one of the external origins (such as a collective group).\nEvery launch period - a length defined in the runtime - the Democracy pallet launches a referendum from a proposal that it takes from either the proposal queue or the external queue in turn. Any token holder in the system can vote on referenda. The voting system uses time-lock voting by allowing the token holder to set their conviction behind a vote. The conviction will dictate the length of time the tokens will be locked, as well as the multiplier that scales the vote power.',
    shortDescription: 'FRAME pallet for democracy',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-treasury',
        'pallet-scheduler',
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-did': {
    name: 'pallet-did',
    size: 50500,
    downloads: 0,
    packageName: 'pallet-did',
    version: '2.0.0',
    license: 'GPL-3.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The DID pallet provides functionality for DIDs management. It uses a universal identity registry where all the required data is associated with an address. It enables the possibility to create a portable, persistent, privacy-protecting, and personal identity.\nNOTE: This pallet is intended for demonstration purposes and is not audited or ready for production use.\n\nSelf-Sovereign Identity\nA decentralized identity or self-sovereign identity is a new approach where no one but you own or control the state of your digital identity.\nSome of the inherited benefits of self-sovereign identity are:\n- Seamless Identity Verification\n- Non-Custodial Login Solutions\n- Stronger Protections for Critical Infrastructure\n- Securing the Internet of Things\n\nDid\nDecentralized identifiers (DIDs) are a new type of identifier to provide verifiable, decentralized digital identity. These new identifiers are designed to enable the controller of a DID to prove control over it and to be implemented independently of any centralized registry, identity provider, or certificate authority. DIDs are URLs that relate a DID subject to a DID document allowing trustable interactions with that subject. DID documents are simple documents describing how to use that specific DID. Each DID document can express cryptographic material, verification methods, or service endpoints, which provide a set of mechanisms enabling a DID controller to prove control of the DID. Service endpoints enable trusted interactions with the DID subject.',
    shortDescription: 'Pallet for Decentralized identifiers (DIDs)',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'IDENTITY'
    ],
    authors: [
      'SUBSTRATE_DEV_HUB'
    ],
    dependencies: {
      using: [
        'pallet-timestamp'
      ],
      usedBy: [
        'pallet-registrar'
      ]
    }
  },
  'pallet-elections': {
    name: 'pallet-elections',
    size: 23600,
    downloads: 0,
    packageName: 'pallet-elections',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Election module for stake-weighted membership selection of a collective.\nThe composition of a set of account IDs works according to one or more approval votes weighted by stake. There is a partial carry-over facility to give greater weight to those whose voting is serially unsuccessful.',
    shortDescription: 'FRAME pallet for elections',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-elections-phragmen': {
    name: 'pallet-elections-phragmen',
    size: 24200,
    downloads: 0,
    packageName: 'pallet-elections-phragmen',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'An election module based on sequential phragmen.\n\nTerm and Round\nThe election happens in rounds: every N blocks, all previous members are retired and a new set is elected (which may or may not have an intersection with the previous set). Each round lasts for some number of blocks defined by TermDuration storage item. The words term and round can be used interchangeably in this context.\nTermDuration might change during a round. This can shorten or extend the length of the round. The next election round\'s block number is never stored but rather always checked on the fly. Based on the current block number and TermDuration, the condition BlockNumber % TermDuration == 0 being satisfied will always trigger a new election round.\n\nVoting\nVoters can vote for any set of the candidates by providing a list of account ids. Invalid votes (voting for non-candidates) are ignored during election. Yet, a voter might vote for a future candidate. Voters reserve a bond as they vote. Each vote defines a value. This amount is locked from the account of the voter and indicates the weight of the vote. Voters can update their votes at any time by calling vote() again. This keeps the bond untouched but can optionally change the locked value. After a round, votes are kept and might still be valid for further rounds. A voter is responsible for calling remove_voter once they are done to have their bond back and remove the lock.\nVoters also report other voters as being defunct to earn their bond. A voter is defunct once all of the candidates that they have voted for are neither a valid candidate anymore nor a member. Upon reporting, if the target voter is actually defunct, the reporter will be rewarded by the voting bond of the target. The target will lose their bond and get removed. If the target is not defunct, the reporter is slashed and removed. To prevent being reported, voters should manually submit a remove_voter() as soon as they are in the defunct state.\n\nCandidacy and Members\nCandidates also reserve a bond as they submit candidacy. A candidate cannot take their candidacy back. A candidate can end up in one of the below situations:\n- Winner: A winner is kept as a member. They must still have a bond in reserve and they are automatically counted as a candidate for the next election.\n- Runner-up: Runners-up are the best candidates immediately after the winners. The number of runners_up to keep is configurable. Runners-up are used, in order that they are elected, as replacements when a candidate is kicked by [remove_member], or when an active member renounces their candidacy. Runners are automatically counted as a candidate for the next election.\n- Loser: Any of the candidate who are not a winner are left as losers. A loser might be an outgoing member or runner, meaning that they are an active member who failed to keep their spot. An outgoing will always lose their bond.\n\nRenouncing candidacy.\nAll candidates, elected or not, can renounce their candidacy. A call to [Module::renounce_candidacy] will always cause the candidacy bond to be refunded.\nNote that with the members being the default candidates for the next round and votes persisting in storage, the election system is entirely stable given no further input. This means that if the system has a particular set of candidates C and voters V that lead to a set of members M being elected, as long as V and C don\'t remove their candidacy and votes, M will keep being re-elected at the end of each round.',
    shortDescription: 'FRAME pallet based on seq-Phragmén election method.',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-collective',
        'pallet-balances'
      ],
      usedBy: [
        'pallet-treasury'
      ]
    }
  },
  'pallet-evm': {
    name: 'pallet-evm',
    size: 6480,
    downloads: 0,
    packageName: 'pallet-evm',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'EVM execution module for Substrate',
    shortDescription: 'FRAME EVM contracts pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'SMART_CONTRACTS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-finality-tracker': {
    name: 'pallet-finality-tracker',
    size: 4850,
    downloads: 0,
    packageName: 'pallet-finality-tracker',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'FRAME Pallet that tracks the last finalized block, as perceived by block authors.',
    shortDescription: 'FRAME pallet for finality tracking',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-grandpa'
      ]
    }
  },
  'pallet-grandpa': {
    name: 'pallet-grandpa',
    size: 8613,
    downloads: 0,
    packageName: 'pallet-grandpa',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'GRANDPA Consensus module for runtime.\nThis manages the GRANDPA authority set ready for the native code. These authorities are only for GRANDPA finality, not for consensus overall.\nIn the future, it will also handle misbehavior reports, and on-chain finality notifications.\nFor full integration with GRANDPA, the GrandpaApi should be implemented. The necessary items are re-exported via the fg_primitives crate.',
    shortDescription: 'FRAME pallet for GRANDPA finality gadget',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-session',
        'pallet-authorship',
        'pallet-finality-tracker'
      ],
      usedBy: []
    }
  },
  'pallet-identity': {
    name: 'pallet-identity',
    size: 15900,
    downloads: 0,
    packageName: 'pallet-identity',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A federated naming system, allowing for multiple registrars to be added from a specified origin. Registrars can set a fee to provide identity-verification service. Anyone can put forth a proposed identity for a fixed deposit and ask for review by any number of registrars (paying each of their fees). Registrar judgements are given as an enum, allowing for sophisticated, multi-tier opinions.\nSome judgements are identified as sticky, which means they cannot be removed except by complete removal of the identity, or by the registrar. Judgements are allowed to represent a portion of funds that have been reserved for the registrar.\nA super-user can remove accounts and in doing so, slash the deposit.\nAll accounts may also have a limited number of sub-accounts which may be specified by the owner; by definition, these have equivalent ownership and each has an individual name.\nThe number of registrars should be limited, and the deposit made sufficiently large, to ensure no state-bloat attack is viable.',
    shortDescription: 'FRAME identity management pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'IDENTITY'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-im-online': {
    name: 'pallet-im-online',
    size: 13300,
    downloads: 0,
    packageName: 'pallet-im-online',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'If the local node is a validator (i.e. contains an authority key), this module gossips a heartbeat transaction with each new session. The heartbeat functions as a simple mechanism to signal that the node is online in the current era.\nReceived heartbeats are tracked for one era and reset with each new era. The module exposes two public functions to query if a heartbeat has been received in the current era or session.\nThe heartbeat is a signed transaction, which was signed using the session key and includes the recent best block number of the local validators chain as well as the NetworkState. It is submitted as an Unsigned Transaction via off-chain workers.',
    shortDescription: 'FRAME\'s I\'m online pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-authorship',
        'pallet-session',
        'pallet-authority-discovery'
      ],
      usedBy: []
    }
  },
  'pallet-indices': {
    name: 'pallet-indices',
    size: 6110,
    downloads: 0,
    packageName: 'pallet-indices',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'An index is a short form of an address.\nThis module handles allocation of indices for a newly created accounts.',
    shortDescription: 'FRAME indices management pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-membership': {
    name: 'pallet-membership',
    size: 5300,
    downloads: 0,
    packageName: 'pallet-membership',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Allows control of membership of a set of AccountIds, useful for managing membership of of a collective.\nA prime member may be set.',
    shortDescription: 'FRAME membership management pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: []
    }
  },
  'pallet-multisig': {
    name: 'pallet-multisig',
    size: 10100,
    downloads: 0,
    packageName: 'pallet-multisig',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A module for doing multisig dispatch.\nThis module contains functionality for multi-signature dispatch, a (potentially) stateful operation, allowing multiple signed origins (accounts) to coordinate and dispatch a call from a well-known origin, derivable deterministically from the set of account IDs and the threshold number of accounts from the set that must approve it.\nIn the case that the threshold is just one then this is a stateless operation. This is useful for multisig wallets where cryptographic threshold signatures are not available or desired.',
    shortDescription: 'FRAME multi-signature dispatch pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: []
    }
  },
  'pallet-nicks': {
    name: 'pallet-nicks',
    size: 5163,
    downloads: 0,
    packageName: 'pallet-nicks',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Nicks is an example module for keeping track of account names on-chain.\nIt makes no effort to create a name hierarchy, be a DNS replacement or provide reverse lookups. Furthermore, the weights attached to this module\'s dispatchable functions are for demonstration purposes only and have not been designed to be economically secure.\nDo not use this pallet as-is in production.',
    shortDescription: 'FRAME pallet for nick management',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'IDENTITY'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-offences': {
    name: 'pallet-offences',
    size: 7040,
    downloads: 0,
    packageName: 'pallet-offences',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Tracks reported offences',
    shortDescription: 'FRAME offences pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-product-registry': {
    name: 'pallet-product-registry',
    size: 8018,
    downloads: 0,
    packageName: 'pallet-product-registry',
    version: '2.0.0',
    license: '/',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Product Registry pallet provides functionality for registering and managing master data (aka class-level) about products / trade items exchanged in a supply chain between various stakeholders. This data is typically registered once by the product\'s manufacturer / supplier to be shared with other network participants.\nWhen this pallet is added to a Subtrate runtime, other custom Substrate pallets can then implement additional business logic leveraging this Product Registry pallet as a reference for known products and their owning organizations.',
    shortDescription: 'Substrate Product Registry pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'SUBSTRATE_DEV_HUB'
    ],
    dependencies: {
      using: [
        'pallet-timestamp',
        'pallet-registrar'
      ],
      usedBy: [
        'pallet-product-tracking'
      ]
    }
  },
  'pallet-product-tracking': {
    name: 'pallet-product-tracking',
    size: 21250,
    downloads: 0,
    packageName: 'pallet-product-tracking',
    version: '2.0.0',
    license: '/',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Product Tracking pallet provides functionality for registering and tracking shipments, and monitoring their storage and transportation conditions, within a fictitious supply chain between various stakeholders.',
    shortDescription: 'Substrate Product Tracking pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'SUBSTRATE_DEV_HUB'
    ],
    dependencies: {
      using: [
        'pallet-product-registry',
        'pallet-timestamp',
        'pallet-registrar'
      ],
      usedBy: []
    }
  },
  'pallet-proxy': {
    name: 'pallet-proxy',
    size: 8890,
    downloads: 0,
    packageName: 'pallet-proxy',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A module allowing accounts to give permission to other accounts to dispatch types of calls from their signed origin.\nThe accounts to which permission is delegated may be requied to announce the action that they wish to execute some duration prior to execution happens. In this case, the target account may reject the announcement and in doing so, veto the execution.',
    shortDescription: 'FRAME proxying pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-randomness-collective-flip': {
    name: 'pallet-randomness-collective-flip',
    size: 4730,
    downloads: 0,
    packageName: 'pallet-randomness-collective-flip',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Randomness Collective Flip module provides a random function that generates low-influence random values based on the block hashes from the previous 81 blocks.\nLow-influence randomness can be useful when defending against relatively weak adversaries.\nUsing this pallet as a randomness source is advisable primarily in low-security situations like testing.',
    shortDescription: 'FRAME randomness collective flip pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-contracts',
        'pallet-society'
      ]
    }
  },
  'pallet-recovery': {
    name: 'pallet-recovery',
    size: 12100,
    downloads: 0,
    packageName: 'pallet-recovery',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Recovery pallet is an M-of-N social recovery tool for users to gain access to their accounts if the private key or other authentication mechanism is lost.\nThrough this pallet, a user is able to make calls on-behalf-of another account which they have recovered.\nThe recovery process is protected by trusted "friends" whom the original account owner chooses. A threshold (M) out of N friends are needed to give another account access to the recoverable account.',
    shortDescription: 'FRAME account recovery pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'ACCOUNTS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-registrar': {
    name: 'pallet-registrar',
    size: 1587,
    downloads: 0,
    packageName: 'pallet-registrar',
    version: '2.0.0',
    license: '/',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'Pallet for keeping track of organization registrar',
    shortDescription: 'FRAME pallet organization registrar',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'SUBSTRATE_DEV_HUB'
    ],
    dependencies: {
      using: [
        'pallet-did'
      ],
      usedBy: [
        'substrate-validator-set',
        'pallet-product-registry',
        'pallet-product-tracking',
        'substrate-rbac'
      ]
    }
  },
  'pallet-scheduler': {
    name: 'pallet-scheduler',
    size: 8010,
    downloads: 0,
    packageName: 'pallet-scheduler',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A module for scheduling dispatches.\nThis module exposes capabilities for scheduling dispatches to occur at a specified block number or at a specified period. These scheduled dispatches may be named or anonymous and may be canceled.\nNOTE: The scheduled calls will be dispatched with the default filter for the origin: namely frame_system::Trait::BaseCallFilter for all origin except root which will get no filter. And not the filter contained in origin use to call fn schedule.\nIf a call is scheduled using proxy or whatever mecanism which adds filter, then those filter will not be used when dispatching the schedule call.',
    shortDescription: 'FRAME pallet for scheduling dispatches',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: [
        'pallet-democracy'
      ]
    }
  },
  'pallet-scored-pool': {
    name: 'pallet-scored-pool',
    size: 8690,
    downloads: 0,
    packageName: 'pallet-scored-pool',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The module maintains a scored membership pool. Each entity in the pool can be attributed a Score. From this pool a set Members is constructed. This set contains the MemberCount highest scoring entities. Unscored entities are never part of Members.\nIf an entity wants to be part of the pool a deposit is required. The deposit is returned when the entity withdraws or when it is removed by an entity with the appropriate authority.\nEvery Period blocks the set of Members is refreshed from the highest scoring members in the pool and, no matter if changes occurred, T::MembershipChanged::set_members_sorted is invoked. On first load T::MembershipInitialized::initialize_members is invoked with the initial Members set.\nIt is possible to withdraw candidacy/resign your membership at any time. If an entity is currently a member, this results in removal from the Pool and Members; the entity is immediately replaced by the next highest scoring candidate in the pool, if available.',
    shortDescription: 'FRAME pallet for scored pools',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-session': {
    name: 'pallet-session',
    size: 16200,
    downloads: 0,
    packageName: 'pallet-session',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Session module allows validators to manage their session keys, provides a function for changing the session length, and handles session rotation.\nThe Session pallet is designed to make the following possible:\n- Set session keys of the validator set for upcoming sessions.\n- Control the length of sessions.\n- Configure and switch between either normal or exceptional session rotations.',
    shortDescription: 'FRAME sessions pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-staking',
        'pallet-babe',
        'pallet-timestamp'
      ],
      usedBy: [
        'pallet-staking',
        'pallet-authority-discovery',
        'pallet-authorship',
        'pallet-im-online',
        'pallet-grandpa',
        'substrate-validator-set',
        'pallet-babe'
      ]
    }
  },
  'pallet-society': {
    name: 'pallet-society',
    size: 24900,
    downloads: 0,
    packageName: 'pallet-society',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Society module is an economic game which incentivizes users to participate and maintain a membership society.',
    shortDescription: 'FRAME society pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-randomness-collective-flip',
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'pallet-staking': {
    name: 'pallet-staking',
    size: 86100,
    downloads: 0,
    packageName: 'pallet-staking',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Staking module is used to manage funds at stake by network maintainers.\nThe Staking module is the means by which a set of network maintainers (known as authorities in some contexts and validators in others) are chosen based upon those who voluntarily place funds under deposit.\nUnder deposit, those funds are rewarded under normal operation but are held at pain of slash (expropriation) should the staked maintainer be found not to be discharging its duties properly.',
    shortDescription: 'FRAME pallet staking',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'CONSENSUS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-timestamp',
        'pallet-authorship',
        'pallet-session',
        'pallet-balances'
      ],
      usedBy: [
        'pallet-session'
      ]
    }
  },
  'pallet-sudo': {
    name: 'pallet-sudo',
    size: 3420,
    downloads: 0,
    packageName: 'pallet-sudo',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Sudo module allows for a single account (called the "sudo key") to execute dispatchable functions that require a Root call or designate a new account to replace them as the sudo key.\nOnly one account can be the sudo key at a time.',
    shortDescription: 'FRAME pallet for sudo',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: []
    }
  },
  'pallet-timestamp': {
    name: 'pallet-timestamp',
    size: 5080,
    downloads: 0,
    packageName: 'pallet-timestamp',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Timestamp module allows the validators to set and validate a timestamp with each block.\nIt uses inherents for timestamp data, which is provided by the block author and validated/verified by other validators. The timestamp can be set only once per block and must be set each block. There could be a constraint on how much time must pass before setting the new timestamp.\nNOTE: The Timestamp module is the recommended way to query the on-chain time instead of using an approach based on block numbers. The block number based time measurement can cause issues because of cumulative calculation errors and hence should be avoided.',
    shortDescription: 'FRAME timestamp module',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-aura'
      ],
      usedBy: [
        'pallet-staking',
        'pallet-product-tracking',
        'pallet-product-registry',
        'pallet-did',
        'pallet-contracts',
        'pallet-babe',
        'pallet-session'
      ]
    }
  },
  'pallet-transaction-payment': {
    name: 'pallet-transaction-payment',
    size: 7160,
    downloads: 0,
    packageName: 'pallet-transaction-payment',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'This module provides the basic logic needed to pay the absolute minimum amount needed for a transaction to be included. This includes:\n- weight fee: A fee proportional to amount of weight a transaction consumes.\n- length fee: A fee proportional to the encoded length of the transaction.\n- tip: An optional tip. Tip increases the priority of the transaction, giving it a higher chance to be included by the transaction queue.\n\nAdditionally, this module allows one to configure:\n- The mapping between one unit of weight to one unit of fee via Trait::WeightToFee.\n- A means of updating the fee for the next block, via defining a multiplier, based on the final state of the chain at the end of the previous block. This can be configured via Trait::FeeMultiplierUpdate',
    shortDescription: 'FRAME pallet to manage transaction payments',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: [
        'pallet-contracts'
      ]
    }
  },
  'pallet-treasury': {
    name: 'pallet-treasury',
    size: 14100,
    downloads: 0,
    packageName: 'pallet-treasury',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'The Treasury module provides a "pot" of funds that can be managed by stakeholders in the system and a structure for making spending proposals from this pot.\nThe Treasury Module itself provides the pot to store funds, and a means for stakeholders to propose, approve, and deny expenditures. The chain will need to provide a method (e.g. inflation, fees) for collecting funds.\nBy way of example, the Council could vote to fund the Treasury with a portion of the block reward and use the funds to pay developers.\n\nTipping\nA separate subsystem exists to allow for an agile "tipping" process, whereby a reward may be given without first having a pre-determined stakeholder group come to consensus on how much should be paid.\nA group of Tippers is determined through the config Trait. After half of these have declared some amount that they believe a particular reported reason deserves, then a countdown period is entered where any remaining members can declare their tip amounts also. After the close of the countdown period, the median of all declared tips is paid to the reported beneficiary, along with any finders fee, in case of a public (and bonded) original report.\n\nBounty\nA Bounty Spending is a reward for a specified body of work - or specified set of objectives - that needs to be executed for a predefined Treasury amount to be paid out. A curator is assigned after the bounty is approved and funded by Council, to be delegated with the responsibility of assigning a payout address once the specified set of objectives is completed.\nAfter the Council has activated a bounty, it delegates the work that requires expertise to a curator in exchange of a deposit. Once the curator accepts the bounty, they get to close the Active bounty. Closing the Active bounty enacts a delayed payout to the payout address, the curator fee and the return of the curator deposit. The delay allows for intervention through regular democracy. The Council gets to unassign the curator, resulting in a new curator election. The Council also gets to cancel the bounty if deemed necessary before assigning a curator or once the bounty is active or payout is pending, resulting in the slash of the curator\'s deposit.',
    shortDescription: 'FRAME pallet to manage treasury',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'GOVERNANCE'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances',
        'pallet-elections-phragmen'
      ],
      usedBy: [
        'pallet-democracy'
      ]
    }
  },
  'pallet-utility': {
    name: 'pallet-utility',
    size: 10500,
    downloads: 0,
    packageName: 'pallet-utility',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A stateless module with helpers for dispatch management which does no re-authentication.\nThis module contains two basic pieces of functionality:\n- Batch dispatch: A stateless operation, allowing any origin to execute multiple calls in a single dispatch. This can be useful to amalgamate proposals, combining set_code with corresponding set_storages, for efficient multiple payouts with just a single signature verify, or in combination with one of the other two dispatch functionality.\n- Pseudonymal dispatch: A stateless operation, allowing a signed origin to execute a call from an alternative signed origin. Each account has 2 * 2**16 possible "pseudonyms" (alternative account IDs) and these can be stacked. This can be useful as a key management tool, where you need multiple distinct accounts (e.g. as controllers for many staking accounts), but where it\'s perfectly fine to have each of them controlled by the same underlying keypair. Derivative accounts are, for the purposes of proxy filtering considered exactly the same as the oigin and are thus hampered with the origin\'s filters.\nSince proxy filters are respected in all dispatches of this module, it should never need to be filtered by any proxy.',
    shortDescription: 'FRAME utilities pallet',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'RUNTIME'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [],
      usedBy: []
    }
  },
  'pallet-vesting': {
    name: 'pallet-vesting',
    size: 8700,
    downloads: 0,
    packageName: 'pallet-vesting',
    version: '2.0.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A simple module providing a means of placing a linear curve on an account\'s locked balance.\nThis module ensures that there is a lock in place preventing the balance to drop below the unvested amount for any reason other than transaction fee payment.\nAs the amount vested increases over time, the amount unvested reduces. However, locks remain in place and explicit action is needed on behalf of the user to ensure that the amount locked is equivalent to the amount remaining to be vested. This is done through a dispatchable function, either vest (in typical case where the sender is calling on their own behalf) or vest_other in case the sender is calling on another account\'s behalf.',
    shortDescription: 'FRAME pallet for manage vesting',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'ACCOUNTS'
    ],
    authors: [
      'PARITY_TECHNOLOGIES'
    ],
    dependencies: {
      using: [
        'pallet-balances'
      ],
      usedBy: []
    }
  },
  'substrate-rbac': {
    name: 'substrate-rbac',
    size: 16500,
    downloads: 0,
    packageName: 'substrate-rbac',
    version: '0.1.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A Substrate pallet implementing role-based access control and permissions for Substrate extrinsic calls.\nThe filtering of incoming extrinsics and their sender accounts is done at the transaction queue validation layer, using the SignedExtension trait.',
    shortDescription: 'A Substrate pallet implementing role-based access control and permissions for Substrate extrinsic calls.',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'Gautam Dhameja'
    ],
    dependencies: {
      using: [
        'pallet-registrar'
      ],
      usedBy: []
    }
  },
  'substrate-validator-set': {
    name: 'substrate-validator-set',
    size: 37750,
    downloads: 0,
    packageName: 'substrate-validator-set',
    version: '0.2.0',
    license: 'Apache-2.0',
    updated: '2020-09-22T18:59:18.000Z',
    description: 'A Substrate pallet to add/remove validators using extrinsics, in Substrate-based PoA networks.',
    shortDescription: 'Pallet to add/remove validators',
    compatibility: 'SUBSTRATE_2',
    categories: [
      'OTHER'
    ],
    authors: [
      'Gautam Dhameja'
    ],
    dependencies: {
      using: [
        'pallet-registrar',
        'pallet-session'
      ],
      usedBy: []
    }
  }
} as DynamicObject<IPalletResponse, EPallets>;

describe("pallet-democracy should yield correct dependencies", () => {
  const palletName = EPallets.PALLET_DEMOCRACY;

  const usedDependencies = GeneratorUtil.recursivelyFindPalletDependencies({
    palletName: palletName,
    pallets: mockedPalletConfigs,
    dependencyType: 'using'
  });

  const expectedUsedDependencies: EPallets[] = [
    EPallets.PALLET_TREASURY,
    EPallets.PALLET_BALANCE,
    EPallets.PALLET_ELECTIONS_PHRAGMEN,
    EPallets.PALLET_COLLECTIVE,
    EPallets.PALLET_SCHEDULER
  ]

  test(`Dependencies which pallet-democracy uses to be ${expectedUsedDependencies}`, () => {
    let areAllDepsIncluded = true;

    expectedUsedDependencies.forEach(expectedDep => {
      areAllDepsIncluded = areAllDepsIncluded && usedDependencies.includes(expectedDep);
    })

    expect(areAllDepsIncluded).toBeTruthy();
  })

  const usedByDependencies = GeneratorUtil.recursivelyFindPalletDependencies({
    palletName: palletName,
    pallets: mockedPalletConfigs,
    dependencyType: 'usedBy'
  });

  test("There shouldn't be any pallets which use pallet-democracy as a dependency", () => {
    expect(usedByDependencies.length === 0).toBeTruthy()
  })
})
