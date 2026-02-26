import {
  Briefcase,
  Code2,
  GraduationCap,
  Lightbulb,
} from "lucide-react"

export const siteConfig = {
  name: "Lab K9",
  url: "https://lab-k9.com",
  email: "info@lab-k9.com",
  emailDisplay: "info[at]lab-k9.com（[at]を@に変換してお送りください）",
}

export const heroContent = {
  heading: "AIの専門家が、事業の中に入る。",
  subtext:
    "戦略立案からシステム構築、組織定着まで。大手から小規模まで企業のAI推進を一気通貫で支援します。",
}

export const services = [
  {
    icon: Briefcase,
    title: "AIプロジェクト推進・PMO",
    description:
      "大手企業のAIプロジェクトに技術と経営の両面から参画。全社展開から個別業務の自動化まで、構想策定から実装・定着を伴走します。",
  },
  {
    icon: Code2,
    title: "AI開発・システム構築",
    description:
      "LLMチャットボット、業務自動化ワークフロー、データ分析基盤を設計・開発。ヘルスケア・製造・学術など業界知見に基づく実装を行います。",
  },
  {
    icon: GraduationCap,
    title: "生成AI研修・教育",
    description:
      "経営層から現場まで体系的に教育。100社・1,000名以上への研修・登壇実績に基づく実践的カリキュラムを提供します。",
  },
  {
    icon: Lightbulb,
    title: "AI戦略コンサルティング",
    description:
      "定例アドバイザリーを通じ、AI活用の戦略策定・ツール選定・投資判断を支援。経営とテクノロジーの橋渡しを担います。",
  },
] as const

export const cases = [
  {
    tag: "自動車",
    summary: "全社AIオーケストレーター構築支援",
    scale: "10万人規模コーポレート部門",
  },
  {
    tag: "ヘルスケア",
    summary: "患者向けAIチャットボット開発・LINE統合",
    scale: "複数医院展開",
  },
  {
    tag: "化学・消費財",
    summary: "生成AI活用研修プログラム設計・実施",
    scale: "全社導入",
  },
  {
    tag: "広告・制作",
    summary: "全社AI戦略アドバイザリー・実装支援",
    scale: "定例顧問契約",
  },
] as const

export const clients = [
  "NTTデータ",
  "NTTデータ東海",
  "トヨタ自動車",
  "artience",
  "SCOグループ",
  "IDEE",
  "パンハウス",
  "MOL-PLUS",
  "兼松コミュニケーションズ",
  "京都大学",
  "beyondS",
  "エスコン",
  "フライヤー",
] as const

export const companyInfo = [
  { label: "会社名", value: "株式会社Lab K9" },
  {
    label: "住所",
    value: "〒530-0001 大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 29階",
  },
  { label: "代表取締役", value: "木村 翼" },
  {
    label: "取引先実績",
    value:
      "NTTデータ / NTTデータ東海 / トヨタ自動車 / artience / SCOグループ / IDEE / パンハウス / MOL-PLUS / 兼松コミュニケーションズ / 京都大学 / beyondS / エスコン / フライヤー",
  },
] as const

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#company", label: "Company" },
] as const
