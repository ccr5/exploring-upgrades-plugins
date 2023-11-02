# Commands list

### 1- Deploy StorageV1
This will create 3 contracts:

- StorageV1 contract 
- ProxyAdmin
- TransparentUpgradeableProxy

```bash
env $(cat .env) npx hardhat run --network mumbai scripts/deployStorageV1.ts
```

### 2- Verify StorageV1
Change <Storage V1 Address> to the StorageV1 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V1 Address>
```

### 3- Upgrade V1 to V2
```bash
env $(cat .env) npx hardhat run --network mumbai scripts/deployStorageV2.ts
```

### 4- Verify StorageV2
Change <Storage V2 Address> to the StorageV2 deployed address
```bash
env $(cat .env) npx hardhat verify --network mumbai <Storage V2 Address>
```
