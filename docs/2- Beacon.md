# Commands list

## DeployBeacon

### 1- Deploy StorageV1
This will deploy 3 contracts:

- StorageV1 contract    (implementation logic)
- UpgradeableBeacon     (implementation address and admin function)

You can only get and manage implementation address

You need to deploy a BeaconProxy using deployBeaconProxy function to use delegateCall

```bash
env $(cat .env) npx hardhat run --network mumbai scripts/deployBeaconStorageV1.ts
```

### 2- Verify StorageV1
Change <Storage V1 Address> to the StorageV1 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V1 Address>
```

### 3- Upgrade V1 to V2
```bash
env $(cat .env) npx hardhat run --network mumbai scripts/deployBeaconStorageV2.ts
```

### 4- Verify StorageV2
Change <Storage V2 Address> to the StorageV2 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V2 Address>
```

## DeployBeaconProxy

### 1- Deploy StorageV1
This will deploy 1 contract:

- BeaconProxy       (proxy / delegateCall / storage)

You need to provide Beacon address

You can create how many proxies you want

Upgrade Beacon will replicate it to the others proxies but 
if the value depends of the initialize function and storage

e.g. if you start two proxies, one with value 1 and other with value 100, when you upgrade beacon contract, both proxies will be replaced to V2 but with differ values (1 and 100)

You can read and write as a proxy on block explorer

Implementation is open (everyone have access)

```bash
env $(cat .env) npx hardhat run --network mumbai scripts/Beacon/deployBeaconProxyStorage.ts
```

### 2- Upgrade V1 to V2
```bash
env $(cat .env) npx hardhat run --network mumbai scripts/Beacon/deployBeaconStorageV2.ts
```