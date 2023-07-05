const api = process.env.GOAPI_URL || "https://api.goapi.id/v1";
const key = process.env.GOAPI_KEY || "wrNqNgQmrZQGF2dXECbTsofHOlemt0";

export const requestProvince = async () => {
  try {
    const request = await fetch(api + "/regional/provinsi", {
      headers: {
        "X-API-KEY": key || ""
      }
    });
    const data = await request.json();

    return data.data;
  } catch (error) {
    return error;
  }
}

export const requestRegency = async (provinceId: string) => {
  try {
    const request = await fetch(api + "/regional/kota?provinsi_id=" + provinceId, {
      headers: {
        "X-API-KEY": key || ""
      }
    });
    const data = await request.json();

    return data.data;
  } catch (error) {
    return error;
  }
}

export const requestDistrict = async (regencyId: string) => {
  try {
    const request = await fetch(api + "/regional/kecamatan?kota_id=" + regencyId, {
      headers: {
        "X-API-KEY": key || ""
      }
    });
    const data = await request.json();

    return data.data;
  } catch (error) {
    return error;
  }
}

export const requestSubDistrict = async (districtId: string) => {
  try {
    const request = await fetch(api + "/regional/kelurahan?kecamatan_id=" + districtId, {
      headers: {
        "X-API-KEY": key || ""
      }
    });
    const data = await request.json();

    return data.data;
  } catch (error) {
    return error;
  }
}