/* eslint-disable sort-keys */
export interface AddressValues {
  address1: string;
  address2: string | null;
  city: string;
  state: string;
  postalCode: string;
}

/**
 * Convert address string to itemized object.
 */
export const separateAddress = (address: string): AddressValues => {
  const arr: string[] = address.split(',');

  if (arr.length === 5) {
    return {
      address1: arr[0],
      address2: arr[1],
      city: arr[2],
      state: arr[3],
      postalCode: arr[4],
    };
  }

  return {
    address1: arr[0],
    address2: null,
    city: arr[1],
    state: arr[2],
    postalCode: arr[3],
  };
};

/**
 * Convert itemized address object to comma separated string.
 */
export const joinAddress = (address: AddressValues): string => {
  // object to array (removes null values)
  const items: string[] = [
    address.address1,
    address.address2,
    address.city,
    address.state,
    address.postalCode,
  ].filter(x => x);

  return items.join(', ');
};
