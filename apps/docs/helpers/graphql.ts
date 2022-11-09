export const CREATE_API_KEY_FOR_ADDRESS = `
mutation CreateSdkApiKey($object: SdkApiKeys_insert_input = {}) {
    insert_SdkApiKeys_one(object: $object) {
      id
      address
      apiKey
    }
  }
`;

export const GET_API_KEY_FOR_ADDRESS = `
query MyQuery($where: SdkApiKeys_bool_exp = {}) {
    SdkApiKeys(where: $where) {
          id
      address
      apiKey
    }
  }
`;
