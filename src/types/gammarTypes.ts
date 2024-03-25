export interface GrammarResponse {
  status: string
  data: GrammarData
}

export interface GrammarData {
  scopes: Scopes
  deprecated: Deprecated
  markers: Marker[]
}

export interface Deprecated {
  identity: DeprecatedIdentity
  tax: DeprecatedTax
  financials: DeprecatedFinancials
  public_health_insurance: DeprecatedPublicHealthInsurance
  iban: Iban
  postal_address: DeprecatedPostalAddress
}

export interface DeprecatedFinancials {
  account_name: Iban
  bic: Iban
  name: Iban
  iban: Iban
  bank_statement_m0: Iban
  account_type: Iban
  proof_of_iban: Iban
  bank_statement_m2: Iban
  bank_statement_m1: Iban
  account_holder: Iban
}

export interface Iban {
  replaced_by: string
}

export interface DeprecatedIdentity {
  proof_of_identity_back: Iban
  document_front: Iban
  mrz: Iban
  proof_of_identity_front: Iban
  document_back: Iban
  document: PurpleDocument
  picture: Iban
}

export interface PurpleDocument {
  nationality: Iban
}

export interface DeprecatedPostalAddress {
  proof_of_residence: Iban
}

export interface DeprecatedPublicHealthInsurance {
  beneficiary: PurpleBeneficiary
  proof: Iban
}

export interface PurpleBeneficiary {
  referal_doctor_appointed: Iban
}

export interface DeprecatedTax {
  income_notice: IncomeNotice
  income_tax_return: UpdatedAt
  tax_notice: PurpleTaxNotice
  income_tax_reference: UpdatedAt
  legal_entity: PurpleLegalEntity
}

export interface IncomeNotice {
  date_of_issue: AMR
  desc_2: string
  claim_type: IncomeNoticeClaimType
  kept_temporarily?: boolean
  deprecated: boolean
  date_of_expiry: AMR
}

export enum IncomeNoticeClaimType {
  Array = 'array',
  Date = 'date',
  FileWrapper = 'file_wrapper',
  Value = 'value',
}

export interface AMR {
  claim_type: IncomeNoticeClaimType
}

export interface UpdatedAt {
  desc_2: string
  kept_temporarily?: boolean
  examples?: Array<number | string>
  claim_type: IncomeNoticeClaimType
  deprecated?: boolean
  openid?: boolean
}

export interface PurpleLegalEntity {
  tax_return: Iban
}

export interface PurpleTaxNotice {
  income_tax_reference: Iban
}

export interface Marker {
  marker: string
  description?: string
}

export interface Scopes {
  address: ScopesAddress
  allowance: Allowance
  amr: AMR
  birthdate: Birthdate
  company: ScopesCompany
  data_source: DataSource
  email: Birthdate
  email_verified: EmailVerified
  family_name: Birthdate
  finances: Finances
  financials: ScopesFinancials
  gender: Birthdate
  given_name: Birthdate
  human_resources: HumanResources
  identity: ScopesIdentity
  locale: Birthdate
  mfa: Mfa
  middle_name: Birthdate
  name: Birthdate
  nickname: Birthdate
  nl: Nl
  others: Other
  personal: ScopesPersonal
  phone_number: Birthdate
  phone_number_verified: EmailVerified
  picture: EmailVerified
  postal_address: ScopesPostalAddress
  preferred_username: Birthdate
  public_health_insurance: ScopesPublicHealthInsurance
  public_transportation: PublicTransportation
  social_benefits: SocialBenefits
  sub: AMR
  tax: ScopesTax
  updated_at: UpdatedAt
  website: UpdatedAt
  zoneinfo: UpdatedAt
}

export interface ScopesAddress {
  claim_type: AddressClaimType
  country: Birthdate
  desc_2: string
  formatted: Birthdate
  locality: Birthdate
  openid: boolean
  postal_code: Birthdate
  postal_code_locality: Birthdate
  region: Birthdate
  route: Birthdate
  street_address: Birthdate
  street_number: Birthdate
}

export enum AddressClaimType {
  FileWrapper = 'file_wrapper',
  Recursive = 'recursive',
}

export interface Birthdate {
  claim_type: IncomeNoticeClaimType
  examples?: string[]
  openid?: boolean
  desc_2?: string
  as_list?: string
}

export interface Allowance {
  claim_type: AddressClaimType
  summary: Summary
  type: EnergyClass
}

export interface Summary {
  claim_type: AddressClaimType
  table: SummaryTable
}

export interface SummaryTable {
  claim_type: IncomeNoticeClaimType
  date: AMR
  document: FluffyDocument
  type: EndReasonClass
}

export interface FluffyDocument {
  back: AMR
  claim_type: IncomeNoticeClaimType
  date_of_expiry: AMR
  date_of_issue: RegistrationDate
  front: AMR
}

export interface RegistrationDate {
  claim_type: IncomeNoticeClaimType
  examples: string[]
}

export interface EndReasonClass {
  claim_type: AddressClaimType
  normalized: RegistrationDate
  raw: AMR
  desc_2?: string
}

export interface EnergyClass {
  claim_type: AddressClaimType
  normalized: RegistrationDate
  raw: RegistrationDate
  desc_2?: string
}

export interface ScopesCompany {
  address: PurpleAddress
  articles_of_association: ArticlesOfAssociation
  business_sector_code: AMR
  claim_type: AddressClaimType
  corporate_officer: Birthdate
  corporate_officers: AMR
  country: AMR
  desc_2: string
  legal_business_name: Birthdate
  legal_form: LegalForm
  registration_certificate: RegistrationCertificate
  registration_date: RegistrationDate
  registration_number: Birthdate
  registration_status: LegalForm
  registry_office: AMR
  share_capital: AMR
  site: PurpleSite
  sites: AMR
  vigilance_certificate: RegistrationCertificate
}

export interface PurpleAddress {
  claim_type: AddressClaimType
  country: AMR
  desc_2: string
  formatted: Birthdate
  locality: AMR
  postal_code: AMR
  postal_code_locality: AMR
  region: AMR
  route: AMR
  street_address: AMR
  street_number: AMR
}

export interface ArticlesOfAssociation {
  claim_type: IncomeNoticeClaimType
  desc_2: string
}

export interface LegalForm {
  claim_type: AddressClaimType
  normalized: Normalized
  raw: Birthdate
  desc_2?: string
}

export interface Normalized {
  claim_type: IncomeNoticeClaimType
  desc_2: string
  examples: string[]
}

export interface RegistrationCertificate {
  claim_type: IncomeNoticeClaimType
  date_of_expiry: RegistrationDate
  date_of_issue: RegistrationDate
  desc_2: string
  security_code?: AMR
  payment_date?: Birthdate
  closing_date?: RegistrationDate
}

export interface PurpleSite {
  address: RegistrationPlaceClass
  as_list: string
  claim_type: AddressClaimType
  registration_number: RegistrationDate
}

export interface RegistrationPlaceClass {
  claim_type: AddressClaimType
  country: AMR
  formatted: AMR
  locality: AMR
  postal_code: AMR
  postal_code_locality: AMR
  region: AMR
  route: AMR
  street_address: AMR
  street_number: AMR
  desc_2?: string
}

export interface DataSource {
  claim_type: AddressClaimType
  display_name: RegistrationDate
  sub: AMR
}

export interface EmailVerified {
  claim_type: IncomeNoticeClaimType
  desc_2?: string
  examples?: boolean[]
  openid?: boolean
}

export interface Finances {
  claim_type: AddressClaimType
  credit_scoring: CreditScoring
  expenses: Expenses
  income: FinancesIncome
}

export interface CreditScoring {
  claim_type: AddressClaimType
  score: Score
}

export interface Score {
  claim_type: AddressClaimType
  normalized: DependentChildrenNumber
  raw: DependentChildrenNumber
}

export interface DependentChildrenNumber {
  claim_type: IncomeNoticeClaimType
  desc_2: string
  examples: number[]
}

export interface Expenses {
  claim_type: AddressClaimType
  table: ExpensesTable
}

export interface ExpensesTable {
  claim_type: IncomeNoticeClaimType
  date: Birthdate
  desc_2: string
  document: TentacledDocument
  gross_amount: NetAmountV2Class
  is_rejected: EmailVerified
  net_amount_v2: NetAmountV2Class
  segment: Birthdate
  tax_amount: NetAmountV2Class
  type: LegalForm
}

export interface TentacledDocument {
  back: AMR
  claim_type: IncomeNoticeClaimType
  date_of_expiry: AMR
  date_of_issue: AMR
  front: AMR
}

export interface NetAmountV2Class {
  claim_type: AddressClaimType
  currency: Birthdate
  date: AMR
  value: DependentChildrenNumber
}

export interface FinancesIncome {
  claim_type: AddressClaimType
  monthly: PurpleMonthly
  table: PurpleTable
  tax_notice: TaxReturnClass
  tax_return: TaxReturnClass
}

export interface PurpleMonthly {
  amount: PurpleAmount
  claim_type: IncomeNoticeClaimType
}

export interface PurpleAmount {
  claim_type: AddressClaimType
  currency: RegistrationDate
  date: RegistrationDate
  value: DependentChildrenNumber
}

export interface PurpleTable {
  business_car_contribution_amount: TaxableValueClass
  claim_type: IncomeNoticeClaimType
  date: Birthdate
  desc_2: string
  document: TentacledDocument
  end_date: Birthdate
  gross_amount: PurpleGrossAmount
  net_amount: DependentChildrenNumber
  paying_institution: PurplePayingInstitution
  private_use_of_business_car_taxable_value: TaxableValueClass
  segment: Birthdate
  start_date: Birthdate
  tax_amount: DependentChildrenNumber
  type: LegalForm
  worked_hours: ArticlesOfAssociation
}

export interface TaxableValueClass {
  claim_type: AddressClaimType
  currency: AMR
  date: AMR
  desc_2?: string
  value: AMR
}

export interface PurpleGrossAmount {
  claim_type: AddressClaimType
  currency: RegistrationDate
  date: AMR
  value: Rank
  desc_2?: string
}

export interface Rank {
  claim_type: IncomeNoticeClaimType
  examples?: number[]
}

export interface PurplePayingInstitution {
  address?: InsuredAddress
  claim_type: AddressClaimType
  legal_business_name: Birthdate
  registration_number: Birthdate
  site: PayingInstitutionSite
}

export interface InsuredAddress {
  claim_type: AddressClaimType
  country: AMR
  desc_2?: string
  examples?: string[]
  formatted: RegistrationDate
  locality: AMR
  postal_code: AMR
  postal_code_locality: AMR
  region: AMR
  route: AMR
  street_address: AMR
  street_number: AMR
}

export interface PayingInstitutionSite {
  address: RegistrationPlaceClass
  claim_type: AddressClaimType
  registration_number: Birthdate
}

export interface TaxReturnClass {
  claim_type: AddressClaimType
  date_of_expiry: AMR
  date_of_issue: AMR
  income_tax_reference?: Rank
  closing_date?: AMR
  security_code?: AMR
  payment_date?: AMR
  desc_2?: string
}

export interface ScopesFinancials {
  account: Account
  accounts: Accounts
  claim_type: AddressClaimType
  desc_2: string
}

export interface Account {
  account_holder: AccountAccountHolder
  account_name: Birthdate
  account_type: ArticlesOfAssociation
  bank: Bank
  bic: Birthdate
  claim_type: AddressClaimType
  iban: Birthdate
  proof_of_iban: ProofOfIban
  transactions: Transactions
}

export interface AccountAccountHolder {
  address: RegistrationPlaceClass
  birthdate: Birthdate
  claim_type: AddressClaimType
  desc_2: string
  family_name: Birthdate
  given_name: Birthdate
  name: RegistrationDate
}

export interface Bank {
  claim_type: AddressClaimType
  name: AMR
}

export interface ProofOfIban {
  claim_type: AddressClaimType
  date_of_expiry: AMR
  debit_card_brand: AMR
  desc_2?: string
}

export interface Transactions {
  claim_type: AddressClaimType
  tink: AMR
}

export interface Accounts {
  account_holder: AccountsAccountHolder
  account_name: AMR
  account_type: AMR
  bank: Bank
  bic: RegistrationDate
  claim_type: IncomeNoticeClaimType
  iban: RegistrationDate
  proof_of_iban: ProofOfIban
  transactions: Transactions
}

export interface AccountsAccountHolder {
  address: RegistrationPlaceClass
  birthdate: AMR
  claim_type: AddressClaimType
  family_name: AMR
  given_name: AMR
  name: RegistrationDate
}

export interface HumanResources {
  claim_type: AddressClaimType
  remuneration_statement_m0: AMR
  remuneration_statement_m1: AMR
  remuneration_statement_m2: AMR
}

export interface ScopesIdentity {
  biometry: PurpleBiometry
  birthdate: Birthdate
  birthplace: Birthplace
  claim_type: AddressClaimType
  document: StickyDocument
  family_name: Birthdate
  family_name_prefix: Birthdate
  gender: Birthdate
  given_name: Birthdate
  middle_name: AMR
  name: Birthdate
  nationality: RegistrationDate
  personal_number: AMR
}

export interface PurpleBiometry {
  age: DependentChildrenNumber
  claim_type: AddressClaimType
  photo_id: ArticlesOfAssociation
  signature: AMR
}

export interface Birthplace {
  claim_type: AddressClaimType
  country: RegistrationDate
  desc_2: string
  formatted: Birthdate
  locality: RegistrationDate
  postal_code: Birthdate
  postal_code_locality: AMR
  region: RegistrationDate
  route: RegistrationDate
  street_address: AMR
  street_number: RegistrationDate
}

export interface StickyDocument {
  back: ArticlesOfAssociation
  claim_type: AddressClaimType
  date_of_expiry: RegistrationDate
  date_of_issue: RegistrationDate
  front: ArticlesOfAssociation
  issuing_country: RegistrationDate
  mrz: Birthdate
  number: RegistrationDate
  type: EndReasonClass
}

export interface Mfa {
  access_token: RegistrationDate
  claim_type: AddressClaimType
  cookies: RegistrationDate
  local_storage: RegistrationDate
}

export interface Nl {
  claim_type: IncomeNoticeClaimType
  personal: NlPersonal
}

export interface NlPersonal {
  employment: PurpleEmployment
}

export interface PurpleEmployment {
  claim_type: AddressClaimType
  contract: PurpleContract
  current_contract_seniority: AMR
  status: EndReasonClass
  verzekeringsbericht: ArticlesOfAssociation
}

export interface PurpleContract {
  as_list: string
  claim_type: AddressClaimType
  employer: FluffyPayingInstitution
  start_date: AMR
  type: EndReasonClass
}

export interface FluffyPayingInstitution {
  claim_type: AddressClaimType
  legal_business_name: AMR
  registration_number: Birthdate
  site: PayingInstitutionSite
  address?: RegistrationPlaceClass
}

export interface Other {
  claim_type: AddressClaimType
  other_data_0: AMR
  other_data_1: AMR
  other_data_2: AMR
  other_data_3: AMR
  other_data_4: AMR
  other_data_5: AMR
  other_data_6: AMR
  other_data_7: AMR
  other_data_8: AMR
  other_data_9: AMR
  other_document_0: AMR
  other_document_1: AMR
  other_document_2: AMR
  other_document_3: AMR
  other_document_4: AMR
  other_document_5: AMR
  other_document_6: AMR
  other_document_7: AMR
  other_document_8: AMR
  other_document_9: AMR
  other_group_0?: Other
  other_group_1?: Other
  other_group_2?: Other
}

export interface ScopesPersonal {
  child: Birthdate
  children: AMR
  claim_type: AddressClaimType
  dependent_children_number: DependentChildrenNumber
  employment: FluffyEmployment
  housing: PersonalHousing
  marital_status: LegalForm
  married_name: Birthdate
  partnership: Partnership
  partnerships: AMR
  phone_number: PhoneNumber
  vehicle: Vehicle
  vehicles: AMR
}

export interface FluffyEmployment {
  claim_type: AddressClaimType
  contract: FluffyContract
  current_contract_seniority: Birthdate
  status: LegalForm
}

export interface FluffyContract {
  as_list: string
  claim_type: AddressClaimType
  desc_2: string
  employer: PurplePayingInstitution
  start_date: Birthdate
  type: EndReasonClass
}

export interface PersonalHousing {
  address: RegistrationPlaceClass
  amount: TaxableValueClass
  applicable_year: AMR
  claim_type: AddressClaimType
  notice: TaxReturnClass
  registration_place: RegistrationPlaceClass
  rent_amount: DependentChildrenNumber
  start_date: Birthdate
  status: LegalForm
  tenant: Tenant
}

export interface Tenant {
  as_list?: string
  claim_type: AddressClaimType
  company: TenantCompany
  identity: TenantIdentity
}

export interface TenantCompany {
  address: RegistrationPlaceClass
  articles_of_association: AMR
  business_sector_code: AMR
  claim_type: AddressClaimType
  corporate_officer: CorporateOfficer
  country: AMR
  legal_business_name: AMR
  legal_form: EndReasonClass
  registration_certificate: TaxReturnClass
  registration_date: AMR
  registration_number: AMR
  registration_status: EndReasonClass
  registry_office: AMR
  share_capital: AMR
  site: FluffySite
  vigilance_certificate: TaxReturnClass
}

export interface CorporateOfficer {
  as_list: string
  claim_type: IncomeNoticeClaimType
}

export interface FluffySite {
  address: RegistrationPlaceClass
  as_list: string
  claim_type: AddressClaimType
  registration_number: AMR
}

export interface TenantIdentity {
  biometry: FluffyBiometry
  birthdate: AMR
  birthplace: RegistrationPlaceClass
  claim_type: AddressClaimType
  document: IndigoDocument
  family_name: AMR
  family_name_prefix: AMR
  gender: AMR
  given_name: AMR
  middle_name: AMR
  name: AMR
  nationality: AMR
  personal_number: AMR
  picture: AMR
}

export interface FluffyBiometry {
  age: AMR
  claim_type: AddressClaimType
  photo_id: AMR
  signature: AMR
}

export interface IndigoDocument {
  back: AMR
  claim_type: AddressClaimType
  date_of_expiry: AMR
  date_of_issue: AMR
  front: AMR
  issuing_country: AMR
  mrz: AMR
  number: AMR
  type: EndReasonClass
}

export interface Partnership {
  as_list: string
  claim_type: AddressClaimType
  desc_2: string
  end_date: ArticlesOfAssociation
  end_reason: EndReasonClass
  partner: Partner
  registration_place: RegistrationPlaceClass
  start_date: ArticlesOfAssociation
  type: LegalForm
}

export interface Partner {
  birthdate: AMR
  birthplace: AMR
  claim_type: AddressClaimType
  desc_2: string
  family_name: AMR
  gender: AMR
  given_name: AMR
  middle_name: AMR
  name: AMR
}

export interface PhoneNumber {
  claim_type: AddressClaimType
  fixed: RegistrationDate
  main: RegistrationDate
  mobile: RegistrationDate
  secondary: RegistrationDate
}

export interface Vehicle {
  as_list: string
  brand: ArticlesOfAssociation
  claim_type: AddressClaimType
  desc_2: string
  energy: EnergyClass
  first_registration_date: ArticlesOfAssociation
  model: ArticlesOfAssociation
  registration_number: ArticlesOfAssociation
  type: EndReasonClass
}

export interface ScopesPostalAddress {
  claim_type: AddressClaimType
  desc_2: string
  formatted: RegistrationDate
  proof_of_address: ProofOfAddress
}

export interface ProofOfAddress {
  claim_type: IncomeNoticeClaimType
  date_of_issue: AMR
}

export interface ScopesPublicHealthInsurance {
  beneficiaries: AMR
  beneficiary: FluffyBeneficiary
  claim_type: AddressClaimType
  desc_2: string
  document: PublicHealthInsuranceDocument
  insured: Insured
}

export interface FluffyBeneficiary {
  as_list: string
  birthdate: Birthdate
  claim_type: AddressClaimType
  desc_2: string
  document: BeneficiaryDocument
  family_name: Birthdate
  given_name: Birthdate
  is_insured: EmailVerified
  is_referal_doctor_appointed: IsReferalDoctorAppointed
  name: RegistrationDate
  number: Birthdate
  rank: Rank
  referal_doctor_date_of_appointment: RegistrationDate
}

export interface BeneficiaryDocument {
  back: AMR
  claim_type: IncomeNoticeClaimType
  date_of_expiry: RegistrationDate
  date_of_issue: RegistrationDate
  front: AMR
}

export interface IsReferalDoctorAppointed {
  claim_type: IncomeNoticeClaimType
  examples: boolean[]
}

export interface PublicHealthInsuranceDocument {
  back: AMR
  claim_type: IncomeNoticeClaimType
  date_of_expiry: Birthdate
  date_of_issue: Birthdate
  desc_2: string
  front: AMR
}

export interface Insured {
  address: InsuredAddress
  claim_type: AddressClaimType
  desc_2: string
  family_name: Birthdate
  given_name: Birthdate
  name: RegistrationDate
  number: Birthdate
  related_organization_code: RegistrationDate
  secondary_health_insurer: Birthdate
}

export interface PublicTransportation {
  claim_type: AddressClaimType
  desc_2: string
  document: PublicHealthInsuranceDocument
}

export interface SocialBenefits {
  claim_type: AddressClaimType
  family: Family
}

export interface Family {
  beneficiary_number: AMR
  claim_type: AddressClaimType
  quotient: AMR
}

export interface ScopesTax {
  claim_type: AddressClaimType
  desc_2: string
  housing: TaxHousing
  income: TaxIncome
  income_notice: IncomeNotice
  income_tax_reference: UpdatedAt
  income_tax_return: UpdatedAt
  legal_entity: FluffyLegalEntity
  proof_of_income: ArticlesOfAssociation
  properties: AMR
  property: Property
  tax_notice: TaxReturnClass
  tax_number: Birthdate
  tax_return: TaxReturnClass
  taxable_income: AMR
}

export interface TaxHousing {
  address: InsuredAddress
  amount: TaxableValueClass
  applicable_year: AMR
  claim_type: AddressClaimType
  notice: TaxReturnClass
  registration_place: RegistrationPlaceClass
  rent_amount: AMR
  start_date: AMR
  status: EndReasonClass
  tenant: Tenant
}

export interface TaxIncome {
  claim_type: AddressClaimType
  monthly: FluffyMonthly
  table: FluffyTable
  tax_notice: FluffyTaxNotice
  tax_notice_table: TaxNoticeTable
  tax_return: TaxReturnClass
  withholding_tax: WithholdingTax
}

export interface FluffyMonthly {
  amount: TaxableValueClass
  claim_type: AddressClaimType
}

export interface FluffyTable {
  business_car_contribution_amount: TaxableValueClass
  claim_type: IncomeNoticeClaimType
  date: AMR
  document: TentacledDocument
  end_date: AMR
  gross_amount: TaxableValueClass
  net_amount: AMR
  paying_institution: FluffyPayingInstitution
  private_use_of_business_car_taxable_value: TaxableValueClass
  segment: AMR
  start_date: AMR
  tax_amount: AMR
  type: EndReasonClass
  worked_hours: AMR
}

export interface FluffyTaxNotice {
  claim_type: IncomeNoticeClaimType
  date_of_expiry: AMR
  date_of_issue: AMR
  declarers: Declarers
  desc_2: string
  income_tax_reference: DependentChildrenNumber
  tax_units: TaxUnits
}

export interface Declarers {
  beta: Beta
  claim_type: IncomeNoticeClaimType
  desc_2: string
  family_name: Birthdate
  name: Birthdate
  tax_number: Birthdate
}

export interface Beta {
  claim_type: AddressClaimType
  private_furnished_accommodation_rental_income_gross_amount: TaxableValueClass
  salary_income_gross_amount: TaxableValueClass
}

export interface TaxUnits {
  claim_type: IncomeNoticeClaimType
  desc_2: string
  examples: Array<number | string>
}

export interface TaxNoticeTable {
  claim_type: IncomeNoticeClaimType
  desc_2: string
  document: TaxNoticeTableDocument
}

export interface TaxNoticeTableDocument {
  back: AMR
  claim_type: IncomeNoticeClaimType
  date_of_expiry: AMR
  date_of_issue: AMR
  desc_2: string
  front: AMR
  income_tax_reference: DependentChildrenNumber
}

export interface WithholdingTax {
  claim_type: AddressClaimType
  main_income_type: LegalForm
}

export interface FluffyLegalEntity {
  claim_type: AddressClaimType
  income: LegalEntityIncome
  tax_compliance_statement: ProofOfAddress
}

export interface LegalEntityIncome {
  claim_type: AddressClaimType
  monthly: FluffyMonthly
  table: TentacledTable
  tax_notice: TaxReturnClass
  tax_return: RegistrationCertificate
}

export interface TentacledTable {
  business_car_contribution_amount: TaxableValueClass
  claim_type: IncomeNoticeClaimType
  date: Birthdate
  desc_2: string
  document: TentacledDocument
  end_date: Birthdate
  gross_amount: PurpleGrossAmount
  net_amount: DependentChildrenNumber
  net_profit_amount: NetAmountV2Class
  operating_profit_amount: NetAmountV2Class
  paying_institution: TentacledPayingInstitution
  payroll_amount: NetAmountV2Class
  private_use_of_business_car_taxable_value: TaxableValueClass
  segment: RegistrationDate
  social_security_contributions_amount: NetAmountV2Class
  start_date: Birthdate
  subcontracting_expenses_amount: NetAmountV2Class
  tax_amount: UpdatedAt
  type: EnergyClass
  worked_hours: AMR
}

export interface TentacledPayingInstitution {
  address: InsuredAddress
  claim_type: AddressClaimType
  legal_business_name: RegistrationDate
  registration_number: Birthdate
  site: PayingInstitutionSite
}

export interface Property {
  address: InsuredAddress
  amount: TaxableValueClass
  as_list: string
  claim_type: AddressClaimType
  desc_2: string
  is_principal_residence: EmailVerified
  notice: TaxReturnClass
  owner: Tenant
  principal_residence_notice: ArticlesOfAssociation
  taxable_value: TaxableValueClass
}
