
    var top_down = document.getElementById('top_down');
    top_down.onmouseover = function(){
        top_down.classList.add('active');
    }
    top_down.onmouseleave = function(){
        top_down.classList.remove('active');
    }

    /* var nav_list_item1 = document.getElementById('nav_list_item1');
    var nav_list_item2 = document.getElementById('nav_list_item2');
    var nav_list_item3 = document.getElementById('nav_list_item3');
    var nav_list_item4 = document.getElementById('nav_list_item4');
    var nav_list_item5 = document.getElementById('nav_list_item5');

    var down_list = document.getElementById('down_list');
    var down_list2 = document.getElementById('down_list2'); */


    /* nav_list_item1.onmousemove = function(){
        down_list.classList.add('down_list_height');
    }
    down_list.onmousemove = function(){
        down_list.classList.add('down_list_height');
    }
    nav_list_item1.onmouseleave = function(){
        down_list.classList.remove('down_list_height');
    }
    down_list.onmouseleave = function(){
        down_list.classList.remove('down_list_height');
    } */

    /* 
        使用Jquery实现的下拉框的菜单内容切换
    */

        $(() => {
            //适应浏览器屏幕可用宽度
            $('#app').css('width', (parseInt(window.screen.availWidth) - 16) + 'px');
         
            var categoryList = getListContent();
            showGoods(categoryList);
            // showCategory(categoryList);
            
         
        })
    /* 
        自定义方法，用来存储图片以及商品名称啥的
    */
    function getListContent(){
        var goodsList = [
            {
                categoryId: 10010,
                categoryName: 'Xiaomi手机',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88ae9b85c5f8fbdae2ea98d58a045e1e.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/02ac31f8d3848f71617e074e8e50879e.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34eec49ce46adcd4739e60a2b56062fc.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/075d45f17b32b39c98be850a5592bbee.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fea69fb5990da9dfc909aa8279aaea7e.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: 'Redmi手机',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae5b5a8e24272dd4cdd77bf6d26954b6.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/418f4cb7536265cd99bdf8b2e88d1f84.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8725dc0e5b0def0155a219a1fc316cca.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/348fb8492808c60a48f99b7d18998e59.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29c295274319514bb6d45282502ab01b.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '电视',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '笔记本',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '平板',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '家电',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '笔记本',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6511d77270e94146c0b1f96b66d8cc58.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a1ae5341d2dae66cd42566c60d2d666.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '路由器',
                productList: [{
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=200&h=138',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54de949334c3d794a6ca55b76e4bb379.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a759fa795d749f0538cfd2a15890027.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    },
                    {
                        productId: 1001001,
                        productImg: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1465737a8a6ac8772560dce2ef0a39f.png?thumb=1&w=200&h=138&f=webp&q=90',
                        productName: 'Redmi手机 Mix4',
                        productPrice: '4999'
                    }
                ]
            },
            {
                categoryId: 10010,
                categoryName: '服务',
            },
            {
                categoryId: 10010,
                categoryName: '社区',
            }
        ];
        return goodsList;
    }

    /* 
        绑定选项卡的类别
    */
    function showGoods(goodsList){
        goodsList.forEach(function(elem){
            //将遍历到的数组元素追加到ul里面去
            $('.nav_list').append(function(){
                // console.log('<li has-product="'+Boolean(elem.productList)+'"><a href="#">' + elem.categoryName + '</a></li>');
                return '<li has-product="'+Boolean(elem.productList)+'"><a href="#">' + elem.categoryName + '</a></li>';
            })
        });

        //给li绑定鼠标移入事件
    $('.nav_list>li').mouseenter(function(){
        // 清空之前div中的商品ul列表
        $('.down_list_wrapper > ul').empty();
        // 获取当前从数组中读取到的商品
        var productList = goodsList[$(this).index()].productList;
        // 判断商品列表是否存在
        if(productList){
            // 若存在，就开始追加数据
            productList.forEach(function(item,index){   //利用forEach便利商品数组
                var li = '<li>'+
                            '<a href="#">'+
                                '<div class="img_box">'+
                                    '<img src=" '+item.productImg+'" alt="">'+
                                '</div>'+
                                '<div class="img_name">'+
                                   item.productName+
                                '</div>'+
                                '<p>'+item.productPrice+'</p>'+
                            '</a>'+
                        '</li>';
                        // console.log(li);
                    $('.down_list_wrapper > ul').append(li);//遍历完成之后将li追加进ul
            });
            $('#down_list').addClass('down_list_addHeight');
            $('.down_list_wrapper').slideDown(500);
            
            
        }
    });
    //给头部容器绑定鼠标划过事件
    $('.down_list').on(
        
        {
            'mouseover':function(e){
                console.log(e);
                // console.log('划过了');
                var categoryElement = $('.down_list_wrapper > ul>li[has-product="true"]')
                /* 
                    影响不是当前的标签页
                */
               console.log(categoryElement);
                if(!$(e.target).is(categoryElement)&&!$(e.target).parents().is(categoryElement)){
                    /* 
                        往上收起并且删除div的高度
                    */
                    // $('#down_list').addClass('down_list_addHeight');
                    // $('.down_list_wrapper').hide(500);
                    // $('.down_list_wrapper').slideUp(500);
                    // $('#down_list').removeClass('down_list_addHeight');
                }
            },
            'mouseleave':function () { 
                $('.down_list_wrapper').slideUp(100);
                $('#down_list').removeClass('down_list_addHeight');
                // $('#down_list').slideUp(500);
            },
        }
    );

    }
