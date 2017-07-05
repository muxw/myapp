const express = require('express');
const router = express.Router();
const path = require('path');
let hero = require('../test.json');
let superagent = require('superagent');

router.get('/depinfo', (req, res) => {
    let data = {
        "msg": "success",
        "code": 0,
        "data": {
            "3003": [
                {
                    "deptCode": "4108X",
                    "deptDescription": "核医学科(医技)",
                    "deptName": "核医学科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "3003",
                    "parentDeptName": "核医学科(医技)"
                },
                {
                    "deptCode": "4109X",
                    "deptDescription": "核医学科(医技)",
                    "deptName": "核医学科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "3003",
                    "parentDeptName": "核医学科(医技)"
                }
            ],
            "3300": [
                {
                    "deptCode": "1115",
                    "deptDescription": "人工肾",
                    "deptName": "血透",
                    "hasChild": "0",
                    "parentDeptCode": "3300",
                    "parentDeptName": "人工肾"
                }
            ],
            "3401": [
                {
                    "deptCode": "4110X",
                    "deptDescription": "超声医学科",
                    "deptLocation": "门诊医技楼四楼",
                    "deptName": "超声专家门诊（B超副）",
                    "hasChild": "0",
                    "parentDeptCode": "3401",
                    "parentDeptName": "超声医学科"
                },
                {
                    "deptCode": "4111X",
                    "deptDescription": "超声医学科",
                    "deptLocation": "门诊医技楼四楼",
                    "deptName": "超声专家门诊（B超正）",
                    "hasChild": "0",
                    "parentDeptCode": "3401",
                    "parentDeptName": "超声医学科"
                },
                {
                    "deptCode": "6000",
                    "deptDescription": "超声医学科",
                    "deptLocation": "医技楼四层",
                    "deptName": "超声专家门诊（B超副）",
                    "hasChild": "0",
                    "parentDeptCode": "3401",
                    "parentDeptName": "超声医学科"
                },
                {
                    "deptCode": "6001",
                    "deptDescription": "超声医学科",
                    "deptLocation": "医技楼四层",
                    "deptName": "超声专家门诊（B超正）",
                    "hasChild": "0",
                    "parentDeptCode": "3401",
                    "parentDeptName": "超声医学科"
                }
            ],
            "4092": [
                {
                    "deptCode": "5006",
                    "deptDescription": "临床药理科(门诊)",
                    "deptLocation": "北院5号楼",
                    "deptName": "临床药理门诊",
                    "hasChild": "0",
                    "parentDeptCode": "4092",
                    "parentDeptName": "临床药理科(门诊)"
                }
            ],
            "6000": [
                {
                    "deptCode": "8888X",
                    "deptDescription": "大内科",
                    "deptName": "测试科室西医35",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "2509",
                    "deptDescription": "大内科",
                    "deptLocation": "一楼（CT过道）",
                    "deptName": "感冒预防门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0103X",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0102X",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8889",
                    "deptDescription": "大内科",
                    "deptName": "测试科室38",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8890",
                    "deptDescription": "大内科",
                    "deptName": "测试科室50",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8892",
                    "deptDescription": "大内科",
                    "deptName": "测试科室15",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8893X",
                    "deptDescription": "大内科",
                    "deptLocation": "一楼大厅",
                    "deptName": "测试科室22",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8894",
                    "deptDescription": "大内科",
                    "deptName": "测试科室100",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0120",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0121",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0122",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0123",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0124",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "8888",
                    "deptDescription": "大内科",
                    "deptName": "测试科室25",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0102",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0103",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0104",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0101",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0105",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0113",
                    "deptDescription": "大内科",
                    "deptName": "普内科*",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0106",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "普内科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0107",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "感冒预防门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0108",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "感冒预防门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0109",
                    "deptDescription": "大内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "感冒预防门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0110",
                    "deptDescription": "大内科",
                    "deptName": "普内科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0111",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊大厅服务台",
                    "deptName": "协作单位双向转诊减免号",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                },
                {
                    "deptCode": "0114",
                    "deptDescription": "大内科",
                    "deptLocation": "门诊三楼西侧",
                    "deptName": "普内科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6000",
                    "parentDeptName": "大内科"
                }
            ],
            "6001": [
                {
                    "deptCode": "0209",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0210",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0225",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "心血管内科(义诊)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0211",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0212",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼心内科1号诊室",
                    "deptName": "心血管内科(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0202X",
                    "deptDescription": "心内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "心血管内科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0203X",
                    "deptDescription": "心内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "心血管内科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0208X",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0209X",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0206",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西",
                    "deptName": "心血管内科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0207",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西",
                    "deptName": "心血管内科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0208",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "高血压慢病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0201",
                    "deptDescription": "心内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "心血管内科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0202",
                    "deptDescription": "心内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "心血管内科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0203",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西",
                    "deptName": "心血管内科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0204",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西",
                    "deptName": "心血管内科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0220",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0221",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0222",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0223",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0224",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0205",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼",
                    "deptName": "心血管内科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                },
                {
                    "deptCode": "0213",
                    "deptDescription": "心内科",
                    "deptLocation": "三楼心内科1号诊室",
                    "deptName": "心血管内科( 50 )",
                    "hasChild": "0",
                    "parentDeptCode": "6001",
                    "parentDeptName": "心内科"
                }
            ],
            "6002": [
                {
                    "deptCode": "0312",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0313",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0314",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0302X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0303X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0306X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0307X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0313X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0314X",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0315",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0316",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0317",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0320",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0325",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0318",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "哮喘（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0310",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0301",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0302",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0303",
                    "deptDescription": "呼吸科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "呼吸科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0304",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西",
                    "deptName": "呼吸科(郁斌)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0311",
                    "deptDescription": "呼吸科",
                    "deptName": "呼吸科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0321",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0322",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0323",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0324",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0305",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0306",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0307",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(正）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                },
                {
                    "deptCode": "0308",
                    "deptDescription": "呼吸科",
                    "deptLocation": "三楼西侧",
                    "deptName": "慢性咳嗽(50）",
                    "hasChild": "0",
                    "parentDeptCode": "6002",
                    "parentDeptName": "呼吸科"
                }
            ],
            "6003": [
                {
                    "deptCode": "1014",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西",
                    "deptName": "消化科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1015",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西",
                    "deptName": "消化科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1007",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科(高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1002X",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1003X",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1011X",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1012X",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1010",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1011",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1012",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(正）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1013",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "慢性胃炎专病(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1008",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "溃疡性结肠炎(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1001",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1002",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1003",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1004",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西",
                    "deptName": "消化科（政）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1009",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "溃疡性结肠炎(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1020",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1021",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1022",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1023",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1024",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "二楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1005",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                },
                {
                    "deptCode": "1006",
                    "deptDescription": "脾胃病科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "消化科(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "6003",
                    "parentDeptName": "脾胃病科"
                }
            ],
            "6004": [
                {
                    "deptCode": "0808",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0802X",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0803X",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0806X",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0807X",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0816",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊（副高）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0812",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0813",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(100)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0814",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(150)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0815",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊（普通）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0817",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊（正高）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0818",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0825",
                    "deptDescription": "老年科",
                    "deptName": "老年科（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0826",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "老年科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0823",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0824",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0801",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0802",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0803",
                    "deptDescription": "老年科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "老年科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0804",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东",
                    "deptName": "老年科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "3512",
                    "deptDescription": "老年科",
                    "deptLocation": "特约门诊 三楼",
                    "deptName": "特约门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0820",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0821",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0822",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0805",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东",
                    "deptName": "老年科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0806",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                },
                {
                    "deptCode": "0807",
                    "deptDescription": "老年科",
                    "deptLocation": "三楼东侧",
                    "deptName": "三高门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6004",
                    "parentDeptName": "老年科"
                }
            ],
            "6005": [
                {
                    "deptCode": "0607",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0608",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0609",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0602X",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0603X",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0606",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "内分泌(工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0601",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0602",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0603",
                    "deptDescription": "内分泌科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "内分泌科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0604",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东",
                    "deptName": "内分泌科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0620",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0621",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0622",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0623",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0624",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                },
                {
                    "deptCode": "0605",
                    "deptDescription": "内分泌科",
                    "deptLocation": "三楼",
                    "deptName": "内分泌科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6005",
                    "parentDeptName": "内分泌科"
                }
            ],
            "6006": [
                {
                    "deptCode": "0509X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "头痛专病（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0518",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "失眠及神经症门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0510X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "头痛专病(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0513X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0514X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "心理咨询门诊[副X]",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0515X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "心理咨询门诊[正X]",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0517X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "失眠及神经症门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0518X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "失眠及神经症门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0525",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "心理咨询门诊",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0519",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "失眠及神经症门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0502X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "门诊三楼东",
                    "deptName": "脑病中心(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0503X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "门诊三楼东",
                    "deptName": "脑病中心(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0508X",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0516",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0517",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "失眠及神经症门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0513",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0501",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0502",
                    "deptDescription": "脑病中心",
                    "deptLocation": "门诊三楼东",
                    "deptName": "脑病中心(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0503",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0504",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0507",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0520",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0521",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0522",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0523",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0524",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0505",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0506",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东",
                    "deptName": "脑病中心（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0508",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "记忆门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0509",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "头痛专病（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0510",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "头痛专病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0511",
                    "deptDescription": "脑病中心",
                    "deptName": "脑病中心(工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0514",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "心理咨询门诊[副]",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                },
                {
                    "deptCode": "0515",
                    "deptDescription": "脑病中心",
                    "deptLocation": "三楼东侧",
                    "deptName": "心理咨询门诊[正]",
                    "hasChild": "0",
                    "parentDeptCode": "6006",
                    "parentDeptName": "脑病中心"
                }
            ],
            "6007": [
                {
                    "deptCode": "0908",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西",
                    "deptName": "肿瘤内科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0909",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西",
                    "deptName": "肿瘤内科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0902X",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0903X",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0901",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0902",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0903",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0904",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西",
                    "deptName": "肿瘤内科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0920",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0921",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0922",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0923",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0924",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0905",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0906",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                },
                {
                    "deptCode": "0907",
                    "deptDescription": "肿瘤内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肿瘤内科(高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6007",
                    "parentDeptName": "肿瘤内科"
                }
            ],
            "6008": [
                {
                    "deptCode": "0422",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0407X",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0411X",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "贫血髓劳专科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0412",
                    "deptDescription": "血液内科",
                    "deptLocation": "义诊 门诊三楼",
                    "deptName": "血液内科(义诊)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0413",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0414",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0409",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0402X",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0403X",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0406X",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0423",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0410",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "贫血髓劳专科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0411",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "贫血髓劳专科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0401",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0402",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0403",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼东",
                    "deptName": "血液内科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0404",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东",
                    "deptName": "血液内科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0420",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0421",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0424",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0406",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0405",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0407",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "血小板减少（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0408",
                    "deptDescription": "血液内科",
                    "deptLocation": "门诊三楼",
                    "deptName": "血液内科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                },
                {
                    "deptCode": "0112A",
                    "deptDescription": "血液内科",
                    "deptLocation": "三楼东侧",
                    "deptName": "方便门诊（血液科）",
                    "hasChild": "0",
                    "parentDeptCode": "6008",
                    "parentDeptName": "血液内科"
                }
            ],
            "6009": [
                {
                    "deptCode": "0709",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0712",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0702X",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0703X",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0706X",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "骨质疏松专病门诊副X（风湿科）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0707X",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "骨质疏松专病门诊正X（风湿科）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0710",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0711",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西侧",
                    "deptName": "风湿病科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0701",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0702",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0703",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0704",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西",
                    "deptName": "风湿病科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0720",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0721",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0722",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0723",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0724",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0705",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西",
                    "deptName": "风湿病科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0706",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "骨质疏松专病门诊副（风湿科）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0707",
                    "deptDescription": "风湿病科",
                    "deptLocation": "三楼西侧",
                    "deptName": "骨质疏松专病门诊正（风湿科）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                },
                {
                    "deptCode": "0708",
                    "deptDescription": "风湿病科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "风湿病科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6009",
                    "parentDeptName": "风湿病科"
                }
            ],
            "6020": [
                {
                    "deptCode": "4004",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4008",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼",
                    "deptName": "内镜中心[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4006",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心（100）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4007",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心（150）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4010X",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4009X",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4003X",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4002X",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4020",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4021",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4022",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4023",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4024",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4003",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4002",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4001",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼",
                    "deptName": "消化内镜中心(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4005",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "七楼西",
                    "deptName": "消化内镜中心（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4009",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4010",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4011",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                },
                {
                    "deptCode": "4012",
                    "deptDescription": "消化内镜中心[门诊]",
                    "deptLocation": "门诊七楼西",
                    "deptName": "胃肠息肉专病门诊（100）",
                    "hasChild": "0",
                    "parentDeptCode": "6020",
                    "parentDeptName": "消化内镜中心[门诊]"
                }
            ],
            "6100": [
                {
                    "deptCode": "2613",
                    "deptDescription": "急诊科",
                    "deptName": "急诊骨伤科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2602",
                    "deptDescription": "急诊科",
                    "deptName": "急诊脑病中心",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2603",
                    "deptDescription": "急诊科",
                    "deptName": "急诊外科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2604",
                    "deptDescription": "急诊科",
                    "deptName": "急诊五官科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2605",
                    "deptDescription": "急诊科",
                    "deptName": "急诊眼科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2606",
                    "deptDescription": "急诊科",
                    "deptName": "急诊皮肤科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2607",
                    "deptDescription": "急诊科",
                    "deptLocation": "妇科",
                    "deptName": "急诊妇科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2608",
                    "deptDescription": "急诊科",
                    "deptLocation": "骨伤科",
                    "deptName": "急诊骨伤科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2609",
                    "deptDescription": "急诊科",
                    "deptName": "急诊肛肠科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2610",
                    "deptDescription": "急诊科",
                    "deptLocation": "儿科",
                    "deptName": "急诊儿科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2611",
                    "deptDescription": "急诊科",
                    "deptLocation": "一楼",
                    "deptName": "急诊内科双向转诊",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2601",
                    "deptDescription": "急诊科",
                    "deptName": "急诊内科",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2617",
                    "deptDescription": "急诊科",
                    "deptName": "急诊内科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2618",
                    "deptDescription": "急诊科",
                    "deptName": "急诊外科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2619",
                    "deptDescription": "急诊科",
                    "deptName": "急诊耳鼻喉科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2620",
                    "deptDescription": "急诊科",
                    "deptName": "急诊神经内科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2614",
                    "deptDescription": "急诊科",
                    "deptName": "急诊妇科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2615",
                    "deptDescription": "急诊科",
                    "deptName": "急诊皮肤科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                },
                {
                    "deptCode": "2616",
                    "deptDescription": "急诊科",
                    "deptName": "急诊儿科-输液减免",
                    "hasChild": "0",
                    "parentDeptCode": "6100",
                    "parentDeptName": "急诊科"
                }
            ],
            "6102": [
                {
                    "deptCode": "8891X",
                    "deptDescription": "急诊内科",
                    "deptName": "测试科室急诊西医12",
                    "hasChild": "0",
                    "parentDeptCode": "6102",
                    "parentDeptName": "急诊内科"
                }
            ],
            "6200": [
                {
                    "deptCode": "3921",
                    "deptDescription": "外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "3922",
                    "deptDescription": "外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "3923",
                    "deptDescription": "外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "3924",
                    "deptDescription": "外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "3925",
                    "deptDescription": "外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "6014",
                    "deptDescription": "外科",
                    "deptLocation": "四楼",
                    "deptName": "卞卫和（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                },
                {
                    "deptCode": "6015",
                    "deptDescription": "外科",
                    "deptLocation": "四楼",
                    "deptName": "任小梅（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "6200",
                    "parentDeptName": "外科"
                }
            ],
            "6201": [
                {
                    "deptCode": "1209",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东",
                    "deptName": "腹壁疝义诊",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1210",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东",
                    "deptName": "普外科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1208",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1202X",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1203X",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1212X",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1213X",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1212",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1213",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1214",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1215",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "胆胰疾病专病门诊（100）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1223",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1224",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1201",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1202",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1203",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1204",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东",
                    "deptName": "普外科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1220",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1205",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼",
                    "deptName": "普外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1206",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1207",
                    "deptDescription": "普外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "普外科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1221",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                },
                {
                    "deptCode": "1222",
                    "deptDescription": "普外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6201",
                    "parentDeptName": "普外科"
                }
            ],
            "6202": [
                {
                    "deptCode": "3308",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3309",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科[工伤保险]",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3321",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3322",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3323",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3324",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3307",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼",
                    "deptName": "心胸外科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3301",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3302",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3303",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科（主）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3304",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科（政）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3305",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东",
                    "deptName": "心胸外科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3320",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3306",
                    "deptDescription": "心胸外科",
                    "deptLocation": "四楼",
                    "deptName": "心胸外科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3303X",
                    "deptDescription": "心胸外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "心胸外科（主X）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                },
                {
                    "deptCode": "3302X",
                    "deptDescription": "心胸外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "心胸外科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6202",
                    "parentDeptName": "心胸外科"
                }
            ],
            "6203": [
                {
                    "deptCode": "3118",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3119",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(结石分析)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3125",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "泌尿外科结石病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3120",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3121",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3122",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3123",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3124",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3112X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "肾移植专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3106X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "泌尿外科(血尿门诊)X",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3102X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "泌尿外科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3126",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "泌尿外科(结石病)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3126X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "泌尿外科(结石病)X",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3125X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "泌尿外科(结石病)X",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3109",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3110",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3112",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "肾移植专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3113",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科中医特色(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3114",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科中医特色(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3115",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西侧",
                    "deptName": "泌尿外科(结石病)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3116",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科中医特色(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3117",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科肿瘤中西医结合专病门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3101",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3102",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3103",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(主)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3104",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3105",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3106",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(血尿门诊)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3108",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "泌尿外科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3107",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "四楼西",
                    "deptName": "肾移植专病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3103X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "泌尿外科(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3116X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "泌尿外科中医特色(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                },
                {
                    "deptCode": "3114X",
                    "deptDescription": "泌尿外科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "泌尿外科中医特色(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6203",
                    "parentDeptName": "泌尿外科"
                }
            ],
            "6204": [
                {
                    "deptCode": "3407",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3409",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3408",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3420",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3423",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3424",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3401",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3402",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科（脑外）副",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3403",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科（脑外）正",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3404",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科（脑外）政",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3405",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3421",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3406",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东",
                    "deptName": "神经外科(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3403X",
                    "deptDescription": "脑外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "神经外科（脑外）正X",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3402X",
                    "deptDescription": "脑外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "神经外科（脑外）副X",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                },
                {
                    "deptCode": "3422",
                    "deptDescription": "脑外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6204",
                    "parentDeptName": "脑外科"
                }
            ],
            "6206": [
                {
                    "deptCode": "3505",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3506",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科(高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3523",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3524",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3525",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3526",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3527",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3518",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "糖尿病足门诊（血管外科）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3522",
                    "deptDescription": "血管外科",
                    "deptName": "血管外科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3501",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3502",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3503",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3504",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3517",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东",
                    "deptName": "血管外科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3516",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼",
                    "deptName": "血管外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3519",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "糖尿病足门诊（血管外科）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3520",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "糖尿病足门诊（血管外科）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3520X",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "糖尿病足门诊（血管外科X）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3519X",
                    "deptDescription": "血管外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "糖尿病足门诊（血管外科X）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3503X",
                    "deptDescription": "血管外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "血管外科（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                },
                {
                    "deptCode": "3502X",
                    "deptDescription": "血管外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "血管外科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6206",
                    "parentDeptName": "血管外科"
                }
            ],
            "6208": [
                {
                    "deptCode": "3609",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东",
                    "deptName": "消化肿瘤外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3608",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化肿瘤外科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3620",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3621",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3622",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3607",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化肿瘤外科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3515",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东",
                    "deptName": "消化系肿瘤外科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3604",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3603",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3602",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3601",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(普通)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3605",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化肿瘤外科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3603X",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3602X",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3515X",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "消化系肿瘤外科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3623",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                },
                {
                    "deptCode": "3624",
                    "deptDescription": "消化肿瘤外科",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6208",
                    "parentDeptName": "消化肿瘤外科"
                }
            ],
            "6211": [
                {
                    "deptCode": "3810",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3811",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺病科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3809X",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3822",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3823",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3824",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3825",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼",
                    "deptName": "乳腺病(义诊)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3807",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3808",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3809",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3801",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3802",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3803",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3804",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（政）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3805",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3806",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3808X",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "乳腺癌中医门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3803X",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3802X",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东",
                    "deptName": "乳腺病科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3820",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                },
                {
                    "deptCode": "3821",
                    "deptDescription": "乳腺外科(门诊)",
                    "deptLocation": "四楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6211",
                    "parentDeptName": "乳腺外科(门诊)"
                }
            ],
            "6212": [
                {
                    "deptCode": "4102",
                    "deptDescription": "放疗科(门诊)",
                    "deptLocation": "门诊一楼大厅",
                    "deptName": "放疗科（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "6212",
                    "parentDeptName": "放疗科(门诊)"
                }
            ],
            "6213": [
                {
                    "deptCode": "4105X",
                    "deptDescription": "介入科(门诊)",
                    "deptLocation": "四楼东边",
                    "deptName": "介入科(副)X",
                    "hasChild": "0",
                    "parentDeptCode": "6213",
                    "parentDeptName": "介入科(门诊)"
                },
                {
                    "deptCode": "4106X",
                    "deptDescription": "介入科(门诊)",
                    "deptLocation": "四楼东边",
                    "deptName": "介入科(正)X",
                    "hasChild": "0",
                    "parentDeptCode": "6213",
                    "parentDeptName": "介入科(门诊)"
                },
                {
                    "deptCode": "6059",
                    "deptDescription": "介入科(门诊)",
                    "deptLocation": "四楼东边",
                    "deptName": "介入科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6213",
                    "parentDeptName": "介入科(门诊)"
                },
                {
                    "deptCode": "6060",
                    "deptDescription": "介入科(门诊)",
                    "deptLocation": "四楼东边",
                    "deptName": "介入科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6213",
                    "parentDeptName": "介入科(门诊)"
                }
            ],
            "6300": [
                {
                    "deptCode": "2407",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2408",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2409",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2420",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2421",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2422",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2423",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2424",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2403X",
                    "deptDescription": "男科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "男科(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2402X",
                    "deptDescription": "男科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "男科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2401",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2402",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2403",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(主)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2404",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2405",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                },
                {
                    "deptCode": "2406",
                    "deptDescription": "男科",
                    "deptLocation": "四楼西",
                    "deptName": "男科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "6300",
                    "parentDeptName": "男科"
                }
            ],
            "6350": [
                {
                    "deptCode": "1333",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南",
                    "deptName": "生殖医学科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1308X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "门诊四楼南",
                    "deptName": "生殖医学科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1307X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "门诊四楼南",
                    "deptName": "生殖医学科（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1318",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(50）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1319",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(100）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1341",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(普）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1342",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(副）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1343",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(正）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1344",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(50）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1345",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(100）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1346",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(150）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1325",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "生殖科膏方（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1326",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "生殖科膏方（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1327",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "生殖科膏方（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1328",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "生殖科膏方（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1329",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "生殖科膏方（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1334",
                    "deptDescription": "生殖医学科",
                    "deptName": "生殖科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1315",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼",
                    "deptName": "生殖科专家门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1316",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(副）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1317",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(正）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1312",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(普）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1306",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼",
                    "deptName": "生殖医学科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1307",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南",
                    "deptName": "生殖医学科（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1308",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南",
                    "deptName": "生殖医学科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1309",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南",
                    "deptName": "生殖医学科（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1310",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南",
                    "deptName": "生殖科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1311",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(300）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1316X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1317X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不孕症专病门诊(正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1342X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                },
                {
                    "deptCode": "1343X",
                    "deptDescription": "生殖医学科",
                    "deptLocation": "四楼南侧",
                    "deptName": "不育症专病门诊(正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6350",
                    "parentDeptName": "生殖医学科"
                }
            ],
            "6400": [
                {
                    "deptCode": "1313",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科专家门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1330",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西",
                    "deptName": "妇科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1331",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西",
                    "deptName": "妇科(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1332",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西",
                    "deptName": "妇科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1302X",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1303X",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1324",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "妇科膏方（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1336",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1337",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1338",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1340",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（150）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1339",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（100）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1335",
                    "deptDescription": "妇科",
                    "deptName": "妇科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1301",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1302",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1304",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1303",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1305",
                    "deptDescription": "妇科",
                    "deptLocation": "门诊六楼西侧",
                    "deptName": "妇科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "6013",
                    "deptDescription": "妇科",
                    "deptLocation": "四楼",
                    "deptName": "任青玲（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1336X",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1337X",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "更年期综合征专病（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1320",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "妇科膏方（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1321",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "妇科膏方（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1322",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "妇科膏方（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                },
                {
                    "deptCode": "1323",
                    "deptDescription": "妇科",
                    "deptLocation": "六楼西侧",
                    "deptName": "妇科膏方（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6400",
                    "parentDeptName": "妇科"
                }
            ],
            "6500": [
                {
                    "deptCode": "1420",
                    "deptDescription": "儿科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1421",
                    "deptDescription": "儿科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1422",
                    "deptDescription": "儿科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1423",
                    "deptDescription": "儿科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1424",
                    "deptDescription": "儿科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1407",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1409",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1408",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西",
                    "deptName": "儿科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1401",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1402",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1403",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1404",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1406",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1405",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1402X",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                },
                {
                    "deptCode": "1403X",
                    "deptDescription": "儿科",
                    "deptLocation": "门诊五楼西侧",
                    "deptName": "儿科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6500",
                    "parentDeptName": "儿科"
                }
            ],
            "6600": [
                {
                    "deptCode": "1711",
                    "deptDescription": "推拿科",
                    "deptLocation": "十二楼病房",
                    "deptName": "推拿科(夜间门诊)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1707",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科（高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1722",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1723",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1724",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1720",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1710",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1701",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1702",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1703",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1704",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1706",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1705",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1721",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1709",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1702X",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                },
                {
                    "deptCode": "1703X",
                    "deptDescription": "推拿科",
                    "deptLocation": "门诊八楼",
                    "deptName": "推拿科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6600",
                    "parentDeptName": "推拿科"
                }
            ],
            "6700": [
                {
                    "deptCode": "1609",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼",
                    "deptName": "针灸康复科(高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1620",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1623",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1624",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1613",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1612",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1611",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1614",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1617",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1618",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1619",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1621",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1622",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1625",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1610",
                    "deptDescription": "针灸科",
                    "deptLocation": "门诊五楼",
                    "deptName": "针灸康复科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1601",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复科(普通)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1602",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复科（副)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1603",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复科（正)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1604",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复科（政)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1605",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1607",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1602X",
                    "deptDescription": "针灸科",
                    "deptLocation": "门诊五楼西",
                    "deptName": "针灸康复科（副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1603X",
                    "deptDescription": "针灸科",
                    "deptLocation": "门诊五楼西",
                    "deptName": "针灸康复科（正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1612X",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1613X",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "肠易激综合征专病(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1618X",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1619X",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西侧",
                    "deptName": "小儿脑瘫专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                },
                {
                    "deptCode": "1606",
                    "deptDescription": "针灸科",
                    "deptLocation": "五楼西",
                    "deptName": "针灸康复科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6700",
                    "parentDeptName": "针灸科"
                }
            ],
            "6800": [
                {
                    "deptCode": "1908",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "骨伤科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1920",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1921",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1922",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1923",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1924",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1906X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "关节病专科门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1912X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "手足踝外科门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1914X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "运动损伤专家门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1915X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "运动损伤专家门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1918",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "脊柱病专科门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1925",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "脊柱病专家门诊(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1917",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼",
                    "deptName": "骨伤科(穴位敷贴）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1901",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "骨伤科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1902",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "骨伤科综合专家(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1903",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "骨伤科综合专家(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1904",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "脊柱病专家门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1910",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "名老中医门诊(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1906",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "关节病专科门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1907",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "关节病专科门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1909",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "名老中医门诊(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1905",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "脊柱病专家门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1911",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "名老中医门诊(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1912",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "手足踝外科门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1913",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "运动损伤专家门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1914",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "运动损伤专家门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1915",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "运动损伤专家门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1916",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "骨伤科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1907X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "关节病专科门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1902X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "骨伤科综合专家(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1903X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "骨伤科综合专家(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1904X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "脊柱病专家门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1905X",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东侧",
                    "deptName": "脊柱病专家门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1908-2",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼",
                    "deptName": "肩痛门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1920-2",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼",
                    "deptName": "中医骨折病专病门诊(38)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1920-3",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼",
                    "deptName": "中医骨折病专病门诊(50)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1919-3",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "股骨头坏死专病门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1919-2",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "股骨头坏死专病门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                },
                {
                    "deptCode": "1919-1",
                    "deptDescription": "骨伤科",
                    "deptLocation": "二楼东",
                    "deptName": "股骨头坏死专病门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6800",
                    "parentDeptName": "骨伤科"
                }
            ],
            "6900": [
                {
                    "deptCode": "2109",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2110",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2121",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2120",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2122",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2123",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2124",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2103X",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "耳鼻喉科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2102X",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "门诊四楼西",
                    "deptName": "耳鼻喉科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2107",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2104",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2101",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2102",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2103",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2106",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                },
                {
                    "deptCode": "2105",
                    "deptDescription": "耳鼻喉科",
                    "deptLocation": "四楼西",
                    "deptName": "耳鼻喉科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "6900",
                    "parentDeptName": "耳鼻喉科"
                }
            ],
            "7000": [
                {
                    "deptCode": "1807",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1808",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1809",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1820",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1821",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1822",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1823",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1802",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1803",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1804",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1806",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1805",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1802X",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                },
                {
                    "deptCode": "1803X",
                    "deptDescription": "口腔科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "口腔科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "7000",
                    "parentDeptName": "口腔科"
                }
            ],
            "7100": [
                {
                    "deptCode": "2035",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(50)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2030",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2031",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2033",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2034",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2032",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2036",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2002X",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2003X",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2007X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼底病（眼科正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2008X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼底病（眼科副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2010X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "青光眼白内障（眼科副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2013X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "青光眼白内障（眼科正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2015X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "干眼症门诊（眼科副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2016X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "干眼症门诊（眼科正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2018X",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2006X",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2023X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2024X",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2021",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "眼科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2001",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2002",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2003",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2004",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东",
                    "deptName": "眼科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2009",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼底病（眼科）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2010",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "青光眼白内障（眼科副）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2014",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2005",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼",
                    "deptName": "眼科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2015",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "干眼症门诊（眼科副）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2016",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "干眼症门诊（眼科正）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2017",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "干眼症门诊（眼科普）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2018",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(正)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2612",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊眼科地下室",
                    "deptName": "儿童眼科门诊",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2006",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2007",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼底病（眼科正）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2008",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "眼底病（眼科副）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2012",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊负一层",
                    "deptName": "小儿眼科门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2013",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "青光眼白内障（眼科正）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2019",
                    "deptDescription": "眼科",
                    "deptLocation": "门诊二楼东",
                    "deptName": "眼科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2020",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东",
                    "deptName": "眼科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2023",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2024",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2025",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                },
                {
                    "deptCode": "2026",
                    "deptDescription": "眼科",
                    "deptLocation": "二楼东侧",
                    "deptName": "老年黄斑变性专病门诊（100）",
                    "hasChild": "0",
                    "parentDeptCode": "7100",
                    "parentDeptName": "眼科"
                }
            ],
            "7200": [
                {
                    "deptCode": "2209",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2210",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2220",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2221",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2222",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2223",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2224",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2211",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2212",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2213",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2214",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2213X",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2212X",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西侧",
                    "deptName": "银屑病专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2203X",
                    "deptDescription": "皮肤科",
                    "deptLocation": "门诊六楼西",
                    "deptName": "皮肤科(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2202X",
                    "deptDescription": "皮肤科",
                    "deptLocation": "门诊六楼西",
                    "deptName": "皮肤科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2208",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2202",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2203",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(主)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2204",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2201",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2205",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                },
                {
                    "deptCode": "2206",
                    "deptDescription": "皮肤科",
                    "deptLocation": "六楼西",
                    "deptName": "皮肤科(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "7200",
                    "parentDeptName": "皮肤科"
                }
            ],
            "7300": [
                {
                    "deptCode": "1520",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1521",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1522",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1523",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1524",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1511",
                    "deptDescription": "肛肠科",
                    "deptLocation": "六楼",
                    "deptName": "便秘专病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1512",
                    "deptDescription": "肛肠科",
                    "deptLocation": "六楼",
                    "deptName": "便秘专病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1513",
                    "deptDescription": "肛肠科",
                    "deptLocation": "六楼",
                    "deptName": "便秘专病门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1514",
                    "deptDescription": "肛肠科",
                    "deptLocation": "六楼",
                    "deptName": "便秘专病门诊（50）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1515",
                    "deptDescription": "肛肠科",
                    "deptLocation": "六楼",
                    "deptName": "便秘专病门诊（100）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1509",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1510",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1501",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1502",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1503",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1504",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1507",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科(高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1505",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1506",
                    "deptDescription": "肛肠科",
                    "deptLocation": "四楼",
                    "deptName": "造口门诊（肛肠科）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1508",
                    "deptDescription": "肛肠科",
                    "deptLocation": "七楼西",
                    "deptName": "肛肠科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1502X",
                    "deptDescription": "肛肠科",
                    "deptLocation": "门诊七楼西",
                    "deptName": "肛肠科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1503X",
                    "deptDescription": "肛肠科",
                    "deptLocation": "门诊七楼西",
                    "deptName": "肛肠科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1512X",
                    "deptDescription": "肛肠科",
                    "deptLocation": "门诊六楼",
                    "deptName": "便秘专病门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                },
                {
                    "deptCode": "1513X",
                    "deptDescription": "肛肠科",
                    "deptLocation": "门诊六楼",
                    "deptName": "便秘专病门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7300",
                    "parentDeptName": "肛肠科"
                }
            ],
            "7500": [
                {
                    "deptCode": "2303X",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "康复理疗科(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                },
                {
                    "deptCode": "2302X",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "门诊二楼西",
                    "deptName": "康复理疗科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                },
                {
                    "deptCode": "2301",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "二楼西",
                    "deptName": "康复理疗科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                },
                {
                    "deptCode": "2302",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "二楼西",
                    "deptName": "康复理疗科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                },
                {
                    "deptCode": "2303",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "二楼西",
                    "deptName": "康复理疗科(主)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                },
                {
                    "deptCode": "2304",
                    "deptDescription": "康复理疗科",
                    "deptLocation": "二楼西",
                    "deptName": "康复理疗科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7500",
                    "parentDeptName": "康复理疗科"
                }
            ],
            "7600": [
                {
                    "deptCode": "2901",
                    "deptDescription": "家庭病床科",
                    "deptName": "家庭病床科",
                    "hasChild": "0",
                    "parentDeptCode": "7600",
                    "parentDeptName": "家庭病床科"
                }
            ],
            "7601": [
                {
                    "deptCode": "3005",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "肿瘤会诊中心(300)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "2902",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "名医堂(50)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "8895",
                    "deptDescription": "高级专家诊疗中心",
                    "deptName": "测试科室150",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "8896",
                    "deptDescription": "高级专家诊疗中心",
                    "deptName": "测试科室300",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "8897",
                    "deptDescription": "高级专家诊疗中心",
                    "deptName": "高级专家300a",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "3001",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "名医堂(100)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "3002",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "名医堂(150)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "3003",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "名医堂(300)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6006",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "门诊七楼名医堂",
                    "deptName": "名医堂膏方门诊（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6007",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "门诊七楼名医堂",
                    "deptName": "名医堂膏方门诊（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6008",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "门诊七楼名医堂",
                    "deptName": "名医堂膏方门诊（高级300）",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6009",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "门诊七楼名医堂",
                    "deptName": "名医堂膏方门诊（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6010",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "名医工作室 北院5号楼",
                    "deptName": "名医堂100(加号)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6011",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "名医工作室 北院5号楼",
                    "deptName": "名医堂150(加号)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "6012",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "名医工作室 北院5号楼",
                    "deptName": "名医堂300(加号)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                },
                {
                    "deptCode": "3004",
                    "deptDescription": "高级专家诊疗中心",
                    "deptLocation": "七楼名医堂",
                    "deptName": "肿瘤会诊中心(0)",
                    "hasChild": "0",
                    "parentDeptCode": "7601",
                    "parentDeptName": "高级专家诊疗中心"
                }
            ],
            "7700": [
                {
                    "deptCode": "1117",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1118",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1119",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1102X",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1103X",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1106X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "水肿（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1109X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "血尿（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1110X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "血尿（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1111X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "尿路感染（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1112X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "糖尿病肾病（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1107X",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "腰痛（肾内科）X",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1101",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1102",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1103",
                    "deptDescription": "肾内科",
                    "deptLocation": "门诊三楼西",
                    "deptName": "肾内科(正)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1104",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西",
                    "deptName": "肾内科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1120",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1121",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1122",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1123",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1124",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1106",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "水肿（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1107",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "腰痛（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1108",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "腰痛（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1109",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "血尿（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1110",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "血尿（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1111",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "尿路感染（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1112",
                    "deptDescription": "肾内科",
                    "deptLocation": "三楼西侧",
                    "deptName": "糖尿病肾病（肾内科）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1105",
                    "deptDescription": "肾内科",
                    "deptName": "肾内科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1113",
                    "deptDescription": "肾内科",
                    "deptLocation": "一楼",
                    "deptName": "肾科正[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1114",
                    "deptDescription": "肾内科",
                    "deptLocation": "一楼",
                    "deptName": "肾科副[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                },
                {
                    "deptCode": "1116",
                    "deptDescription": "肾内科",
                    "deptName": "肾内科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "7700",
                    "parentDeptName": "肾内科"
                }
            ],
            "7800": [
                {
                    "deptCode": "6066",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检膏方门诊（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6067",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检膏方门诊（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4205",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(高级50)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4206",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4203X",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4202X",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "5003",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心",
                    "deptName": "体检门诊",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "5004",
                    "deptDescription": "体检中心",
                    "deptLocation": "南院养生堂",
                    "deptName": "体检门诊(市医保)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6062X",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检中心(治未病门诊)副X",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6063X",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检中心(治未病门诊)正X",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4202",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(副)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4203",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "中医体质调理(主)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "4201",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心",
                    "deptName": "中医体质调理(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6061",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检中心(治未病门诊)普",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6062",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检中心(治未病门诊)副",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6063",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检中心(治未病门诊)正",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6064",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检膏方门诊（副高25）",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                },
                {
                    "deptCode": "6065",
                    "deptDescription": "体检中心",
                    "deptLocation": "体检中心二楼",
                    "deptName": "体检膏方门诊（正高38）",
                    "hasChild": "0",
                    "parentDeptCode": "7800",
                    "parentDeptName": "体检中心"
                }
            ],
            "7901": [
                {
                    "deptCode": "3908",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3909",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊(工伤保险)",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3907",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊(高级150)",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3903X",
                    "deptDescription": "麻醉科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "疼痛门诊（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3902X",
                    "deptDescription": "麻醉科",
                    "deptLocation": "门诊四楼东",
                    "deptName": "疼痛门诊（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3903",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊（正）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3901",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊(普)",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3902",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3904",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊（政）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3905",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                },
                {
                    "deptCode": "3906",
                    "deptDescription": "麻醉科",
                    "deptLocation": "四楼东",
                    "deptName": "疼痛门诊(高级100)",
                    "hasChild": "0",
                    "parentDeptCode": "7901",
                    "parentDeptName": "麻醉科"
                }
            ],
            "8100": [
                {
                    "deptCode": "2506",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2507",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2502",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科(副)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2503",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科(主)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2504",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科(政)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2508",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "发热门诊",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2510",
                    "deptDescription": "感染科",
                    "deptName": "肝病科（工伤保险）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2511",
                    "deptDescription": "感染科",
                    "deptName": "肝病科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2512",
                    "deptDescription": "感染科",
                    "deptName": "肝病肿瘤专病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2513",
                    "deptDescription": "感染科",
                    "deptName": "肝病肿瘤专病(正)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2514",
                    "deptDescription": "感染科",
                    "deptName": "脂肪肝专病(副)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2515",
                    "deptDescription": "感染科",
                    "deptName": "脂肪肝专病(正)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2516",
                    "deptDescription": "感染科",
                    "deptName": "肝病科(肝脏肿瘤)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2501",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科(普)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2505",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "肝病科(高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2517",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "腹泻病门诊（副）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2518",
                    "deptDescription": "感染科",
                    "deptLocation": "东门",
                    "deptName": "腹泻病门诊（普）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2520",
                    "deptDescription": "感染科",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2521",
                    "deptDescription": "感染科",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2522",
                    "deptDescription": "感染科",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2523",
                    "deptDescription": "感染科",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2524",
                    "deptDescription": "感染科",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2502X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "肝病科(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2503X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "肝病科(主X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2512X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "肝病肿瘤专病(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2513X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "肝病肿瘤专病(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2514X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "脂肪肝专病(副X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                },
                {
                    "deptCode": "2515X",
                    "deptDescription": "感染科",
                    "deptLocation": "肝病门诊",
                    "deptName": "脂肪肝专病(正X)",
                    "hasChild": "0",
                    "parentDeptCode": "8100",
                    "parentDeptName": "感染科"
                }
            ],
            "8700": [
                {
                    "deptCode": "0112",
                    "deptDescription": "方便门诊",
                    "deptLocation": "三楼南",
                    "deptName": "方便门诊",
                    "hasChild": "0",
                    "parentDeptCode": "8700",
                    "parentDeptName": "方便门诊"
                }
            ],
            "8900": [
                {
                    "deptCode": "3706",
                    "deptDescription": "整形外科",
                    "deptLocation": "北行政楼一楼",
                    "deptName": "整形外科（政）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3707",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（高级50）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3708",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（高级100）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3709",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（高级150）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3720",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（25元）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3721",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（38元）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3722",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（50元）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3723",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（100元）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3724",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "膏方门诊（150元）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3702",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（副）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3703",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（正）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3705",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科[义诊]",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "6016",
                    "deptDescription": "整形外科",
                    "deptLocation": "行政楼一楼",
                    "deptName": "黄金龙（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "6017",
                    "deptDescription": "整形外科",
                    "deptLocation": "行政楼一楼",
                    "deptName": "沈干（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "6018",
                    "deptDescription": "整形外科",
                    "deptLocation": "行政楼一楼",
                    "deptName": "刘育凤（义诊）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3703X",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（正X）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                },
                {
                    "deptCode": "3702X",
                    "deptDescription": "整形外科",
                    "deptLocation": "门诊楼西面5号楼1层",
                    "deptName": "整形外科（副X）",
                    "hasChild": "0",
                    "parentDeptCode": "8900",
                    "parentDeptName": "整形外科"
                }
            ],
            "9000": [
                {
                    "deptCode": "5001",
                    "deptDescription": "其它科室",
                    "deptLocation": "南院体检中心二楼",
                    "deptName": "预防保健科",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                },
                {
                    "deptCode": "5005",
                    "deptDescription": "其它科室",
                    "deptLocation": "科研",
                    "deptName": "科研",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                },
                {
                    "deptCode": "3511",
                    "deptDescription": "其它科室",
                    "deptLocation": "二楼东",
                    "deptName": "法医门诊",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                },
                {
                    "deptCode": "6003",
                    "deptDescription": "其它科室",
                    "deptLocation": "南三楼B超室",
                    "deptName": "膏方门诊（副高25）",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                },
                {
                    "deptCode": "6004",
                    "deptDescription": "其它科室",
                    "deptLocation": "南三楼B超室",
                    "deptName": "膏方门诊（正高38）",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                },
                {
                    "deptCode": "6005",
                    "deptDescription": "其它科室",
                    "deptLocation": "南三楼B超室",
                    "deptName": "膏方门诊（政府津贴）",
                    "hasChild": "0",
                    "parentDeptCode": "9000",
                    "parentDeptName": "其它科室"
                }
            ],
            "9417": [
                {
                    "deptCode": "9981",
                    "deptDescription": "江北门诊",
                    "deptName": "江北中医科",
                    "hasChild": "0",
                    "parentDeptCode": "9417",
                    "parentDeptName": "江北门诊"
                }
            ],
            "9418": [
                {
                    "deptCode": "3006",
                    "deptDescription": "江南门诊",
                    "deptLocation": "名医堂七楼",
                    "deptName": "肺结节多学科门诊",
                    "hasChild": "0",
                    "parentDeptCode": "9418",
                    "parentDeptName": "江南门诊"
                }
            ]
        }
    }
    res.json(data);
})

module.exports = router