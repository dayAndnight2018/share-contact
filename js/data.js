// 导航列表
let guideTabListData = [
    {
        title: '物业',
        num: 0,
	},
    {
        title: '水电气网',
        num: 1,
    },
	{
		title: '周边',
        	num: 2,
	}
];


let guideTabGroupListData = [];

let wuye = [
   {
		num: 0,
		data:[
			{
				// 联系人
				name: '龙庭帝景',
				email: '',
				ceil: '0539-5256396',
                title: '物业服务',
                company: '',
                address:''
			}
            
		]
	} 
]

let life = [
	{
		num: 1,
		data:[
			{
				// 联系人
				name: '中裕燃气',
				email: '',
				ceil: '0539-8151677',
                title: '燃气',
                company: '',
                address:''
			},
			{
				// 联系人
				name: '联通宽带',
				email: '',
				ceil: '18669950797',
                title: '网络',
                company: '',
                address:''
			}
		]
	}
]

let around = [
	{
		num: 2,
		data:[
			{
				// 联系人
				name: '纸壳回收',
				email: '',
				ceil: '13013505887',
                title: '周边',
                company: '',
                address:'新东关'
			},
			{
				// 联系人
				name: '上门开锁',
				email: '',
				ceil: '15588128057',
                title: '周边',
                company: '',
                address:'新东关'
			}
		]
	}
]
guideTabGroupListData = guideTabGroupListData.concat(wuye, life, around);
