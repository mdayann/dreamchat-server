export default function ResponseData(
  res: any,
  code = 200,
  message: any,
  meta: string,
  data: any
) {
  let response = {
    message: message,
    meta,
    data,
  };

  if (meta !== null) {
    response.meta = meta;
  }

  if (data !== null) {
    response.data = data;
  }

  res.status(code).send(response);
}
