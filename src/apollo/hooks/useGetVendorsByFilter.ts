import { useLazyQuery } from "@apollo/client";
import { GQL_GET_VENDORS_BY_FILTER } from "../queries";

type VendorFilter = {
  brandPartnerId?: string | null;
  searchTerm?: string;
  address?: string;
};

type brandPartnerCategory = {
  title: string;
};

type BrandPartner = {
  name: string;
  note: string;
  title: string;
  url: string;
  brandPartnerNo: number;
  brandPartnerCategory: brandPartnerCategory;
};

export type VendorType = {
  _id: string;
  title: string;
  status: string;
  brandPartnerId: string;
  city: string;
  country: string;
  currentStatus: string;
  gstNo: string;
  name: string;
  pinCode: string;
  state: string;
  address: string;
  brandPartner: BrandPartner[];
};

interface gqlGetVendorByFilterParams {
  limit: number;
  page: number;
  filter: VendorFilter;
}

export interface gqlGetVendorByFilterResponse {
  totalCount?: number;
  vendors?: VendorType[];
}

const useGetVendorsByFilter = () => {
  const [GetVendorsByFilter, { data, loading: loadingVBF }] = useLazyQuery<
    { getVendorsByFilter: gqlGetVendorByFilterResponse },
    gqlGetVendorByFilterParams
  >(GQL_GET_VENDORS_BY_FILTER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });
  return {
    GetVendorsByFilter,
    loadingVBF,
    data: data?.getVendorsByFilter || null,
  };
};

export default useGetVendorsByFilter;
