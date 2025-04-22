var myChartLeft1 = echarts.init(document.getElementById('left1'));   
  const colors = ['#5470C6', '#8FCBB4', '#EE6666'];
  var optionLeft1 = {
    title: {
      text: '方剂对应配方数量排行（前20）',
      subtext: '数据来源：中医方剂数据库',
      left: 'center',
      textStyle: {
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}：{c}次'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '15%',  // 为长名称留出更多空间
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [
        '人参散', '犀角散', '当归散', '木香散', '木香丸',
        '人参汤', '羚羊角散', '白术散', '槟榔散', '黄耆散',
        '黄耆汤', '黄连散', '牛黄丸', '柴胡散', '茯苓汤',
        '当归汤', '加味四物汤', '大黄散', '麦门冬散', '黄连丸'
      ],
      axisLabel: {
        rotate: 45,  // 倾斜45度防止重叠
        fontSize: 10,
        margin: 15
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      name: '出现次数',
      nameLocation: 'end',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [{
      type: 'bar',
      barWidth: '70%',
      data: [
        259, 214, 199, 182, 174,
        168, 166, 164, 149, 149,
        146, 142, 134, 123, 122,
        116, 115, 114, 113, 112
      ],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#d1f2e6' },  // 浅青瓷
          { offset: 0.5, color: '#76d7c4' },// 中青瓷 
          { offset: 1, color: '#48c9b0' }   // 深青瓷
  ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: 10
      }
    }]
  };
  myChartLeft1.setOption(optionLeft1);   
  
var myChartLeft2 = echarts.init(document.getElementById('left2'));  
    const data = [
        10897,  // 上为末
        9628,   // 如梧桐子大
        7102,   // 上为细末
        6945,   // 炼蜜为丸
        5365,   // 上为末（需合并重复项）
        4784,   // 上为细末（重复项）
        4363,   // 上为散
        3566,   // 上为粗末
        1794,   // 上为细散
        1754,   // 上为粗散
        1716,   // 如绿豆大
        712,    // 上锉
        686,    // 面糊为丸
        684,    // 如麻豆大
        652     // 如弹子大
    ];
  const methods = ['上为末', '如梧桐子大', '上为细末', '炼蜜为丸', '上为末', '上为细末', '上为散', '上为粗末', '上为细散', '上为粗散', '如绿豆大', '上锉', '面糊为丸', '如麻豆大', '如弹子大'];
  
   var optionLeft2 = {
    title: {
      text: '中药炮制方法使用频次排行（前15）',
      subtext: '数据来源：中医方剂数据库',
      left: 'center'
    },
    polar: {
      radius: '75%'
    },
    radiusAxis: {
      max: 12000,
      axisLine: { show: false },        // 隐藏径向轴线
      splitLine: { lineStyle: { color: '#e0e0e0' } }
    },
    angleAxis: {
      type: 'category',
      data: methods,
      axisLabel: {
        fontSize: 12,
        color: '#4a4a4a',
        margin: 10
      },
      axisTick: { show: false }         // 隐藏刻度线
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}：{c}次'
    },
    series: [{
    type: 'bar',
    data: data,
    coordinateSystem: 'polar',
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#dcedc8' },
        { offset: 0.7, color: '#a5d6a7' },
        { offset: 1, color: '#66bb6a' }
      ]),
      borderRadius: [2, 2, 0, 0]
    },
    label: {  // 关闭标签显示
      show: false  // 将此属性改为false
    }
  }]
  };
  myChartLeft2.setOption(optionLeft2);  

var myChartCenter = echarts.init(document.getElementById('map'));

    var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
    var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];

    var seriesData = [{
      name: '北京',
      value: 0
    }, {
      name: '天津',
      value: 1
    }, {
      name: '上海',
      value: 1
    }, {
      name: '重庆',
      value: 74
    }, {
      name: '河北',
      value: 159
    }, {
      name: '河南',
      value: 316
    }, {
      name: '云南',
      value: 340
    }, {
      name: '辽宁',
      value: 83
    }, {
      name: '黑龙江',
      value: 104
    }, {
      name: '湖南',
      value: 156
    }, {
      name: '安徽',
      value: 209
    }, {
      name: '山东',
      value: 239
    }, {
      name: '新疆',
      value: 76
    }, {
      name: '江苏',
      value: 74
    }, {
      name: '浙江',
      value: 89
    }, {
      name: '江西',
      value: 187
    }, {
      name: '湖北',
      value: 265
    }, {
      name: '广西',
      value: 180
    }, {
      name: '甘肃',
      value: 293
    }, {
      name: '山西',
      value: 125
    }, {
      name: '内蒙古',
      value: 84
    }, {
      name: '陕西',
      value: 190
    }, {
      name: '吉林',
      value: 82
    }, {
      name: '福建',
      value: 45
    }, {
      name: '贵州',
      value: 138
    }, {
      name: '广东',
      value: 110
    }, {
      name: '青海',
      value: 22
    }, {
      name: '西藏',
      value: 16
    }, {
      name: '四川',
      value: 474
    }, {
      name: '宁夏',
      value: 20
    }, {
      name: '海南',
      value: 23
    }, {
      name: '台湾',
      value: 0
    }, {
      name: '香港',
      value: 0
    }, {
      name: '澳门',
      value: 0
    }, {
        name: '南海诸岛',
        value: 0
      }];
    
    initEcharts("china", "全国中药材资源产地数量分布地图");

    // 初始化echarts  
    function initEcharts(pName, Chinese_) {  
    var tmpSeriesData = pName === "china" ? seriesData : [];  
    
    var optionCenter = {  
      title: {  
        text: Chinese_ || pName,  
        subtext: '数据来源：康美中药网',
        left: 'center' ,
        textStyle: {  
          color: '#000', // 标题颜色  
          fontSize: 18 // 标题字体大小
        } 
      }, 
      tooltip: {  
        trigger: 'item',  
        formatter: '{b}<br/>药材产地数量：{c} (个)'  
      },  
      visualMap: { // 引入视觉映射组件  
        min: 0, // 数据范围的最小值  
        max: Math.max(...tmpSeriesData.map(item => item.value)), // 数据范围的最大值  
        pieces: [
          {gt: 300, color: '#009999'},          
          {gt: 150, lte: 300,color:'#66CCCC'},  
          {gt: 80, lte: 150,color:'#8FCBB4'}, 
          {gt: 30, lte: 80,color:'#94D2A9'},  
          {gt: 0, lte: 30,color:'#A5DFCD'}, 
          {value: 0, label: '数据暂缺', color: 'grey'}
      ],
        type: 'piecewise', 
        text: ['高', '低'],  
        calculable: true,   
        orient: 'vertical', 
        left: 'left',  
        top: 'bottom',   
        inRange: {  
          colorAlpha: 2
        }  
      },  
      series: [  
        {  
          name: Chinese_ || pName,  
          type: 'map',  
          mapType: pName,  
          roam: false,  
          data: tmpSeriesData,  
          top: "10%",  
          zoom: 1.1,  
          selectedMode: 'single',  
          label: {  
            normal: {  
              show: true,  
              textStyle: { color: "black" ,fontSize: 12}  
            },  
            emphasis: {  
              show: true,  
              textStyle: { color: "#323232" }  
            }  
          },  
          itemStyle: {  
            normal: {  
              borderWidth: 0.5,  
              areaColor: '#4ea397', // 这个颜色将被visualMap覆盖  
            },  
            emphasis: {  
              borderWidth: 0.5,  
              areaColor: '#ece39e' // 这个颜色将被visualMap覆盖  
            }  
          }  
        }  
      ]  
    };  
    
    myChartCenter.setOption(optionCenter);  
  }

var myChartRight1 = echarts.init(document.getElementById('right1'));  
  var optionRight1 = {
    title: {
        text: '方剂主治症状排行（前15）',
        subtext: '数据来源：中医方剂数据库',
        left: 'center',
        textStyle: {
          fontSize: 18
        }
      },
      tooltip: {  // 悬浮提示配置
        trigger: 'item',
        backgroundColor: '#f5fff5',  // 浅绿背景
        borderColor: '#66bb6a',       // 边框颜色与主题色一致
        borderWidth: 1,
        textStyle: {
          color: '#2e7d32',           // 文字颜色加深
          fontSize: 14
        },
        formatter: '{b}：<span style="color:#388e3c;font-weight:bold">{c}</span> 次'
      },
      legend: {
        top: 'bottom',
        textStyle: {
          color: '#666'
        },
        // 图例悬浮效果
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: '#66bb6a'
          }
        }
      },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    color: [  // 8级竹叶青渐进色系
      '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784',
      '#66bb6a', '#4caf50', '#388e3c', '#2e7d32'
    ],
    series: [{
      name: '中医功效分布',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff'
      },
      label: {
        show: true,
        formatter: '{b|{b}}\n{c}次',
        rich: {
          b: {
            fontSize: 12,
            color: '#2e7d32',
            padding: [5, 0, 0, 0]
          }
        }
      },
      data: [
        { value: 918,  name: '不思饮食' },
        { value: 245,  name: '伤寒' },
        { value: 225,  name: '咳嗽' },
        { value: 221,  name: '中风' },
        { value: 220,  name: '心腹胀满' },
        { value: 219,  name: '脾胃虚弱' },
        { value: 219,  name: '虚劳' },
        { value: 218,  name: '发背' },
        { value: 216,  name: '痈疽' },
        { value: 214,  name: '面色萎黄' },
        { value: 207,  name: '头痛' },
        { value: 198,  name: '四肢无力' },
        { value: 195,  name: '不欲饮食' },
        { value: 195,  name: '半身不遂' },
        { value: 193,  name: '五劳七伤' }
      ].sort((a, b) => b.value - a.value)  // 按数值降序排列
    }]
  };
    myChartRight1.setOption(optionRight1); 

  var myChartRight2 = echarts.init(document.getElementById('right2'));  
  var optionRight2 = {
    title: {
        text: '中药方法使用方式词云图',
        subtext: '数据来源：中医方剂数据库',
        left: 'center',
        textStyle: {
          fontSize: 18
        }
      },
      graphic: {
        type: 'image',
        z: 0,
        style: {
          image: 'web-code\images\herb_usage_wordcloud.png', // 相对路径
          width: '100%',
          height: '100%'
        },
        left: 'center',
        top: 'middle'
      },
      // 隐藏所有坐标轴和辅助元素
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: { show: false },
      legend: { show: false }
};
    
      myChartRight2.setOption(optionRight2);
      
    // const chart = echarts.init(document.getElementById('wordcloud'));
    // chart.setOption(option);
    myChartRight2.setOption(optionRight2);
