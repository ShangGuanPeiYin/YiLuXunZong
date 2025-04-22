var myChartLeft1 = echarts.init(document.getElementById('left1'));   
  var optionLeft1 = {
    title: [{
      text: '药材功能主治排行（前15）',
      subtext: '数据来源：2020版《中国药典》',
      left: 'center',
      top: '3%',
      textStyle: {
        fontSize: 18,
        color: '#333'
      },
      subtextStyle: {
        fontSize: 14,
        color: '#666',
        verticalAlign: 'bottom'
      }
    }],
    xAxis: {
      type: 'category',
      data: ['清热解毒', '风湿痹痛', '咽喉肿痛', '崩漏', '解毒', '痈肿疮毒', '胸痹心痛', '外伤出血', '便血', '止血', '内热消渴', '肠燥便秘', '蛇虫咬伤', '止痛', '吐血'],
      axisLabel: {
        rotate: 30,
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      name: '出现频次',
      nameTextStyle: {
        color: '#666',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c} 次'
    },
    series: [{
      data: [71, 38, 30, 29, 25, 25, 23, 22, 22, 21, 21, 20, 20, 18, 18],
      type: 'bar',
      barWidth: '60%',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(255,215,215,0.2)'
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#ff6b6b' },
          { offset: 0.7, color: '#ff3838' },
          { offset: 1, color: '#c23616' }
        ])
      },
      label: {
        show: true,
        position: 'top',
        color: '#c23616',
        fontWeight: 'bold'
      }
    }],
    grid: {
      containLabel: true,
      left: '10%',
      right: '5%',
      top: '20%',  // 给标题留出空间
      bottom: '20%'
    }
  }
  myChartLeft1.setOption(optionLeft1);   
  
var myChartLeft2 = echarts.init(document.getElementById('left2'));  
   var optionLeft2 = {
    // 标题配置
    title: {
      text: '药材对应药性占比统计',
      subtext: '数据来源：2020《中国药典》',
      left: 'center',
      top: '5%',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      subtextStyle: {
        fontSize: 14,
        color: '#666',
        padding: [5, 0, 0, 0]  // 上间距5px
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}次 ({d}%)',
      backgroundColor: '#fff5f5',
      borderColor: '#ff6b6b',
      textStyle: {
        color: '#c21807'
      }
    },
    legend: {
      top: '18%',  // 下移图例位置
      left: 'center',
      show: false,
      orient: 'horizontal',
      itemWidth: 25,
      itemHeight: 14,
      textStyle: {
        color: '#8b0000',
        fontSize: 12
      },
      pageTextStyle: {
        color: '#ff2400'
      }
    },
    color: [
      '#fff0f0', '#ffdada', '#ffb3b3', '#ff8f8f',
      '#ff6b6b', '#ff4444', '#c21807', '#8b0000',
      '#ff2400', '#cc1100', '#800000', '#660000',
      '#4d0000', '#330000', '#1a0000'
    ],
    series: [{
      name: '中药性味分布',
      type: 'pie',
      radius: ['30%', '60%'],  // 调整半径
      center: ['50%', '55%'],  // 饼图位置下移
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b|{b}}\n{c}次',
        rich: {
          b: {
            fontSize: 12,
            color: '#8b0000',
            lineHeight: 20
          }
        }
      },
      emphasis: {
        scale: true,
        scaleSize: 8,
        label: {
          show: true,
          fontSize: 18,
          color: '#c21807',
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 165, name: '温' },
        { value: 145, name: '寒' },
        { value: 132, name: '平' },
        { value: 71,  name: '微寒' },
        { value: 48,  name: '凉' },
        { value: 42,  name: '有毒', itemStyle: {color: '#8b0000'} },      // 特别标注毒性
        { value: 31,  name: '有小毒', itemStyle: {color: '#660000'} },
        { value: 31,  name: '微温' },
        { value: 17,  name: '热' },
        { value: 10,  name: '有大毒', itemStyle: {color: '#4d0000'} },
        { value: 2,   name: '大寒' },
        { value: 2,   name: '大热' },
        { value: 1,   name: '燥' },
        { value: 1,   name: '锐' },
        { value: 1,   name: '涩' }
      ].sort((a, b) => b.value - a.value)  // 按数值降序排列
    }],
    // 数据标签布局优化
    labelLayout: {
      hideOverlap: true,
      moveOverlap: 'shiftY'
    },
    // 布局调整
    grid: {
      top: '25%',    // 顶部留白区域
      bottom: '15%'  // 底部留白区域
    }
  };
  myChartLeft2.setOption(optionLeft2);  

var myChartCenter = echarts.init(document.getElementById('map'));
optionCenter = {
    title: {
      text: '药材药性和归经共现矩阵',
      subtext: '数据来源：北京理工大学TCM-SD数据集',
      left: 'center',
      textStyle: {
        fontSize: 18,
      },
      subtextStyle: {
        fontSize: 12,
        color: '#666'
      }
    },
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '50%',
      top: '18%'  // 调整顶部间距适应标题
    },
    xAxis: {
      type: 'category',
      data: ['三焦', '入肝', '大肠', '小肠', '心', '心包', '肝', '肺', '肾', '胃', '胆', '脾', '膀胱'],
      splitArea: { show: true },
      axisLabel: { rotate: 45 }
    },
    yAxis: {
      type: 'category',
      data: ['凉', '大寒', '大热', '寒', '平', '微寒', '微温', '涩', '温', '热'],
      splitArea: { show: true }
    },
    visualMap: {
      min: 0,
      max: 80,  // 根据最大共现值72调整
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '10%',
      inRange: {
        color: ['#FFE0E0', '#FF6666', '#FF0000']  // 红色渐变
      }
    },
    series: [{
      name: '共现次数',
      type: 'heatmap',
      data: [[8, 11, 72], [8, 9, 50], [8, 7, 55], [8, 8, 59], [0, 7, 20], [0, 6, 31], [8, 6, 76], [3, 7, 67], [3, 9, 55], [6, 11, 14], [6, 7, 14], [6, 4, 3], [6, 8, 9], [0, 4, 10], [5, 7, 36], [5, 4, 18], [4, 6, 70], [4, 11, 37], [3, 12, 21], [3, 6, 70], [3, 2, 39], [9, 11, 12], [9, 9, 9], [9, 8, 9], [9, 4, 6], [9, 7, 2], [5, 11, 8], [4, 9, 32], [4, 7, 54], [4, 2, 19], [8, 2, 20], [3, 4, 35], [3, 8, 30], [8, 4, 25], [3, 11, 15], [3, 5, 2], [6, 9, 9], [6, 2, 3], [6, 3, 1], [5, 9, 28], [6, 6, 15], [4, 8, 33], [0, 11, 14], [8, 10, 4], [3, 3, 11], [9, 6, 7], [8, 5, 1], [0, 9, 14], [0, 8, 6], [0, 12, 3], [0, 2, 5], [4, 4, 31], [8, 0, 1], [5, 2, 7], [5, 6, 36], [8, 12, 9], [9, 2, 4], [0, 10, 3], [5, 12, 7], [5, 8, 10], [1, 7, 2], [1, 9, 1], [3, 10, 11], [0, 3, 2], [4, 3, 5], [2, 8, 2], [2, 11, 2], [2, 4, 2], [2, 6, 1], [5, 10, 6], [5, 3, 2], [6, 12, 2], [4, 12, 5], [8, 1, 1], [5, 5, 2], [3, 0, 2], [0, 5, 1], [4, 0, 1], [4, 10, 2], [1, 12, 1], [4, 5, 1], [7, 6, 1], [7, 7, 1], [7, 9, 1]]
        .map(item => [item[1], item[0], item[2]]),  // 交换坐标轴索引
      label: {
        show: true,
        formatter: function(params) {
          return params.value[2] > 30 ? params.value[2] : '';  // 仅显示较大数值
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  if (optionCenter && typeof optionCenter === 'object') {
          myChartCenter.setOption(optionCenter);
        }
    
        window.addEventListener('resize', myChartCenter.resize);
        myChartCenter.setOption(optionCenter); 

var myChartRight1 = echarts.init(document.getElementById('right1'));  
  var optionRight1 = {
    title: {
      text: '疾病频次排行（前15）',
      subtext: '数据来源：北京理工大学TCM-SD数据集',
      left: 'center',
      top: '5%',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      subtextStyle: {
        fontSize: 14,
        color: '#666'
      }
    },
    tooltip: {  // 新增tooltip配置
      trigger: 'item',
      formatter: '{b}<br/>出现频次: {c}次',
      backgroundColor: '#FFEBEE',  // 浅红色背景
      borderColor: '#B71C1C',      // 深红色边框
      borderWidth: 1,
      textStyle: {
          color: '#4A148C',        // 深紫色文字
          fontSize: 14
      }
  },
    legend: {
      top: 'bottom',
      show: false,
      textStyle: {
        color: '#8b0000'
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { 
          show: true,
          readOnly: false,
          title: '数据视图',
          textStyle: {
            color: '#c21807'
          }
        },
        restore: { show: true },
        saveAsImage: { 
          show: true,
          title: '保存图片',
          type: 'png',
          pixelRatio: 2
        }
      }
    },
    color: [
      '#ffcccc', '#ff9999', '#ff6666', '#ff3333', 
      '#cc0000', '#990000', '#660000', '#4d0000',
      '#330000', '#290000', '#1f0000', '#140000',
      '#0a0000', '#050000', '#000000'  // 15级红色渐变
    ],
    series: [{
      name: '疾病分布',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '55%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}\n{c}次',
        fontSize: 12,
        color: '#8b0000'
      },
      data: [
        { value: 4664, name: '中风病' },
        { value: 2548, name: '胸痹心痛病' },
        { value: 2524, name: '混合痔' },
        { value: 2380, name: '中风-中经络' },
        { value: 1775, name: '眩晕病' },
        { value: 1731, name: '消渴病' },
        { value: 1644, name: '内科癌病' },
        { value: 1461, name: '肛肠病（混合痔病）' },
        { value: 1304, name: '肛漏病' },
        { value: 1196, name: '心衰病' },
        { value: 1082, name: '腹痛病' },
        { value: 1042, name: '骨折病' },
        { value: 934,  name: '咳嗽病' },
        { value: 917,  name: '喘病' },
        { value: 871,  name: '肛痈' }
      ].sort((a, b) => b.value - a.value)
    }],
    // 视觉映射组件
    visualMap: {
      show: false,
      min: 800,
      max: 4664,
      inRange: {
        colorLightness: [0.8, 0.2]  // 颜色亮度映射
      }
    }
  };
    myChartRight1.setOption(optionRight1); 

  var myChartRight2 = echarts.init(document.getElementById('right2'));  
  var optionRight2 = option = {
    title: [
      {
        text: '中医病症频次排行（前15）',
        left: 'center',
        top: 20,  // 主标题距顶部20px
        textStyle: {
          fontSize: 20
        }
      },
      {
        text: '数据来源：北京理工大学TCM-SD数据集',
        left: 'center',
        top: 50,  // 副标题下移10px
        textStyle: {
          fontSize: 12,
          color: '#666'
        }
      }
    ],
    polar: {
      radius: [30, '80%'],  // 微调半径范围
      center: ['50%', '58%']  // 极坐标系中心下移
    },
    radiusAxis: {
      max: 8000,
      axisLabel: {
        color: '#c23531'
      }
    },
    angleAxis: {
      type: 'category',
      data: [
        '气虚血瘀证', '湿热下注证', '气滞血瘀证', '风痰阻络证', '肝胃郁热证',
        '痰湿蕴肺证', '正虚瘀结证', '热毒蕴结证', '脾肾两虚证', '肝肾亏虚证',
        '气阴两虚证', '湿热瘀阻证', '肾虚证', '肝肾不足证', '肝胃不和证'
      ],
      startAngle: 75,
      axisLabel: {
        color: '#333',
        fontSize: 12,
        margin: 8
      }
    },
    tooltip: {
      formatter: '{b}<br/>频次：{c}'
    },
    series: {
      type: 'bar',
      data: [
        7379, 6972, 4160, 2976, 1785,
        1661, 1524, 1146, 881, 798,
        738, 552, 527, 497, 485
      ],
      coordinateSystem: 'polar',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [{
            offset: 0, color: '#ff7272' // 浅红色
          }, {
            offset: 1, color: '#c23531' // 深红色
          }]
        },
        borderRadius: 5
      },
      label: {
        show: true,
        position: 'middle',
        formatter: '{c}',
        color: '#fff',
        fontSize: 12
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(194, 53, 49, 0.5)'
        }
      }
    },
    animation: true
  };
    
      myChartRight2.setOption(optionRight2);
      
    // const chart = echarts.init(document.getElementById('wordcloud'));
    // chart.setOption(option);
    myChartRight2.setOption(optionRight2);
