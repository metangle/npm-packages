const MarkdownJsonParser = require('../src')

const  markdown = `| label         | 请求类型     |     required |  type      |  --   |  --  |
| ------------ | -------------------------------- |-----------|--------|----|--- |
| fAreaId  | 大区id,整数类型 |   body    |   true   |integer(int64)  |       |
| fCaptainTel  | 车长电话 |   body    |   true   |string  |       |
| fCarsetCaptain  | 车长 |   body    |   true   |string  |       |
| fCarsetCaptainId  | 车长id,整型 |   body    |   true   |integer(int64)  |       |
| fCarsetDeputy  | 副车长 |   body    |   true   |string  |       |
| fCarsetDeputyId  | 副车长id |   body    |   true   |integer(int64)  |       |
| fCompanyApprove  | 公司特批:有特批,无特批 |   body    |   true   |string  |       |
| fContractDesc  | 合同说明 |   body    |   false   |string  |       |
| fContractName  | 合同名称 |   body    |   false   |string  |       |
| fContractSituation  | 合同情况 |   body    |   true   |string  |       |
| fCustomerCity  | 城市 |   body    |   false   |string  |       |
| fCustomerId  | 客户id,整数类型 |   body    |   true   |integer(int64)  |       |`

console.log('markdown--', MarkdownJsonParser.table2json(markdown))
/* 
[
  {
    label: 'fAreaId',
    '请求类型': '大区id,整数类型',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCaptainTel',
    '请求类型': '车长电话',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCarsetCaptain',
    '请求类型': '车长',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCarsetCaptainId',
    '请求类型': '车长id,整型',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCarsetDeputy',
    '请求类型': '副车长',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCarsetDeputyId',
    '请求类型': '副车长id',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCompanyApprove',
    '请求类型': '公司特批:有特批,无特批',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fContractDesc',
    '请求类型': '合同说明',
    required: 'body',
    type: 'false',
    '--': ''
  },
  {
    label: 'fContractName',
    '请求类型': '合同名称',
    required: 'body',
    type: 'false',
    '--': ''
  },
  {
    label: 'fContractSituation',
    '请求类型': '合同情况',
    required: 'body',
    type: 'true',
    '--': ''
  },
  {
    label: 'fCustomerCity',
    '请求类型': '城市',
    required: 'body',
    type: 'false',
    '--': ''
  },
  {
    label: 'fCustomerId',
    '请求类型': '客户id,整数类型',
    required: 'body',
    type: 'true',
    '--': ''
  }
]
*/