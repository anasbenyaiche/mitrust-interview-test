import { FieldInfo } from '../types/gammarTypes'

export function transformToFieldInfo(data: Record<string, Claim>): FieldInfo[] {
  const fields: FieldInfo[] = []

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const claim = data[key]
      const fieldInfo: FieldInfo = {
        field: key,
        desc_2: claim.desc_2,
        examples: claim.examples ? claim.examples[0] : undefined,
      }

      if (claim.claim_type === 'recursive') {
        console.log(claim)
        fieldInfo.children = transformToFieldInfo(claim)
      }

      fields.push(fieldInfo)
    }
  }

  return fields
}
