# Commands list

## DeployProxy

### 1- Deploy StorageV1
This will deploy 3 contracts:

- StorageV1 contract            (implementation)
- ProxyAdmin                    (implementation address and others admin functions)
- TransparentUpgradeableProxy   (proxy/delegateCall)

You can create how many proxies you want 

Upgrade one of them doesn't replicate it to the others and the value depends of the initialize function and storage

e.g. if you start two transparent proxies, one with value 1 and other with value 100, when you upgrade one proxy to V2, only this proxy will be replaced to V2. The value continue 1 and 100

You can read and write as a proxy on block explorer

Implementation and proxy admin is visible only to Owner

```bash
env $(cat .env) npx hardhat run --network mumbai scripts/TransparentProxyAdmin/deployProxyStorageV1.ts
```

### 2- Verify StorageV1
Change <Storage V1 Address> to the StorageV1 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V1 Address>
```

### 3- Upgrade V1 to V2
```bash
env $(cat .env) npx hardhat run --network mumbai scripts/TransparentProxyAdmin/deployProxyStorageV2.ts
```

### 4- Verify StorageV2
Change <Storage V2 Address> to the StorageV2 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V2 Address>
```