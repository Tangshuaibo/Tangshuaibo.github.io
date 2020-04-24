// 头部返回按钮功能
function setBtnBack() {
    $('#header-back-sub').on('click', function () {
        if ($('#page-content-detail').css('display') === 'none') {
            window.history.back();
        } else {
            $('#page-content-detail').hide();
            $('#page-top, #page-content').show();
        }
    });
}

// 显隐客服二维码
function toggleQrCode() {
    $('#page-top-card-info-row-btn-qq').on('click', function () {
        $('#page-layer').show();
    });
    $('#page-layer-close').on('click', function () {
        $('#page-layer').hide();
    });
}

// 显隐部分列表项
function toggleListItem() {
    $('.page-content-list-item').each(function () {
        var $this = $(this);
        var hideListItem = function () {
            $this.find('.page-content-list-item-list-item:not(.proto)').each(function (index) {
                if (index > 1) {
                    $(this).hide();
                }
            });
            $this.find('i.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            $this.css('background-color', 'white');
        };
        var showListItem = function () {
            $this.find('.page-content-list-item-list-item:not(.proto)').show();
            $this.find('i.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
            $this.css('background-color', '#eee');
        };
        hideListItem();
        var allListItemShown = false;
        $(this).find('.page-content-list-item-title').on('click', function () {
            if (allListItemShown) {
                hideListItem();
            } else {
                showListItem();
            }
            allListItemShown = !allListItemShown;
        });
    });
}

// 生成各列表项
function renderListItem(data) {
    var contentList = $('#page-content-list');
    var protoContentItem = $('.page-content-list-item:first-of-type');
    $.each(data, function (dataIndex, dataItem) {
        contentList.append(protoContentItem.clone());
        var lastContentItem = $('.page-content-list-item:last-of-type');
        var lastContentItemTitle = lastContentItem.find('.page-content-list-item-title-text');
        var lastContentItemList = lastContentItem.find('.page-content-list-item-list');
        var lastContentItemListProtoItem = lastContentItem.find('.page-content-list-item-list-item:first-of-type');
        lastContentItemTitle.text(dataItem.title);
        $.each(dataItem.content, function (detailIndex, detailItem) {
            lastContentItemList.append(lastContentItemListProtoItem.clone());
            var lastContentItemListLastItem = lastContentItemList.find('li:last-of-type');
            lastContentItemListLastItem.text(detailItem.title).removeClass('proto').show();
            clickShowDetail(lastContentItemListLastItem, dataItem, detailIndex);
        });
        lastContentItem.show();
    });
}

// 显示问题的详细内容
function clickShowDetail(jqObj, dataItem, detailIndex) {
    jqObj.on('click', function () {
        var itemContent = dataItem.content[detailIndex];
        $('#page-content-detail-card-title').text(itemContent.title);
        $('#page-content-detail-card-detail').html(itemContent.detail);
        $('#page-top, #page-content').hide();
        $('#page-content-detail').show();
    });
}

// 页面加载完成后执行
$(function () {
    var data = [
        {
            title: '活动福利',
            content: [
                {
                    title: '什么是红包？',
                    detail: '红包是为了帮助用户全面了解券小二过程，方便用户参与券小二的抵用券。红包形式为“满额减免”形式。<br>满额减免：例如满10减2红包，就是单笔支付满10元，支付时立减2元。<br>客服强烈建议：请在有效期内及时使用红包，否则过期作废。'
                },
                {
                    title: '积分怎么玩？',
                    detail: '每消费1元即可增加1积分。积分可用于购买平台商品 ，100积分抵扣1元。积分不可用于充值提现。'
                },
                {
                    title: '各种各样的商品活动？',
                    detail: '券小二会不定时的针对商品上线限时的各种优惠活动，您可关注券小二平台，留意更多精彩活动详情！'
                }
            ]
        },
        {
            title: '领取奖品',
            content: [
                {
                    title: '怎样查看是否已中奖？',
                    detail: '为了您可以第一时间收到通知：<br>您可以登录券小二--个人中心--专享订单查看。'
                },
                {
                    title: '如何领取中奖商品？',
                    detail: '收到获奖通知之后，您可以在【专享订单】里面找到对应的中奖记录，点击【去支付】后，支付专享价后填写真实的收货地址等信息，以便我们尽快安排派发您中奖的商品。<br><span>温馨提示：系统不会默认您的“收货地址”中的收货信息，请您在中奖之后及时确认收货地址等信息。</span>'
                },
                {
                    title: '领取奖品有哪些不同的方式？',
                    detail: '券小二将根据不同的奖品类型，采用不同的方式给您发货：<br>1.手机、电脑等物品将通过快递寄送到您手中；<br>2.手机话费、Q币等直充类商品将直接充值到您所提供的手机号中。'
                }
            ]
        },
        {
            title: '物流发货',
            content: [
                {
                    title: '获得的商品什么时候发货？',
                    detail: '当您中奖后，请尽快支付专享价提交收货地址（系统不会默认您的“收货地址”中的收货地址信息，每次获得券小二商品后都需要确认好您的收货地址）.各类商品发货规定如下：<br>1.虚拟类商品（Q币、话费等）将在1个工作日内为您充值。<br>2.实物类商品将在5个工作日内安排发货。如遇到某些奖品库存不足等问题，发货时间可能有所延迟，请您耐心等待哦~<br>注：工作日是指除周末、法定节假日之外的正常工作时间。'
                },
                {
                    title: '可以选择或更换商品的颜色或型号吗？',
                    detail: '收到获奖通知之后，您可以在【专享订单】里面找到对应的中奖记录，点击【去支付】后，支付专享价后填写真实的收货地址等信息，以便我们尽快安排派发您中奖的商品。<br><span>温馨提示：系统不会默认您的“收货地址”中的收货信息，请您在中奖之后及时确认收货地址等信息。</span>'
                },
                {
                    title: '可以修改已确认的收货地址吗？',
                    detail: '若由于您的收货地址填写错误、联系方式填写有误等情况造成商品无法完成投递或被退回，所产生的诸如二次投递的额外费用及后果将由中奖用户承担。'
                },
                {
                    title: '如果我的收货信息有误，没有收到商品怎么办？',
                    detail: '中奖后一旦确认收货地址，无法二次修改。请您慎重填写并确认！'
                },
                {
                    title: '签收时需要注意哪些问题？',
                    detail: '签收时需谨慎，请尽量本人签收，签收时务必仔细检查商品。如：外包装是否完整，商品是否破损，配件是否缺失，功能是否正常。请在确保无误后再签收，以免产生不必要的纠纷。若有任何疑问，请及时联系客服反馈信息，若由于未仔细检查商品（即签收后）产生的纠纷，券小二概不负责，仅承担协调处理的义务。'
                }
            ]
        },
        {
            title: '售后服务',
            content: [
                {
                    title: '商品是正品吗？有发票吗？',
                    detail: '券小二所有商品均从正规渠道采购，所有商品100%正品，可享受厂家提供的全国联保服务。<br>因为用户获取的是奖品性质的商品，所以券小二不提供相关发票。'
                },
                {
                    title: '关于商品的物流问题售后',
                    detail: '如果您的商品在快递运输过程中损坏或者遗失，请立即联系客服。客服会与物流工作人员核实，确认索赔后将重新安排中奖商品的发货事宜。<br><span>温馨提示：</span>快递损件，必须先验收，发现问题后拒收，客服会联系物流核实处理。若未通过验收就直接签字确认，之后发现问题，物流方面是不予处理的。<br><span>免责声明：</span>若用户帐号出现密码泄露，导致账户内中奖商品被领取，平台概不负责！请用户保管好自己的帐号密码，以免造成损失。'
                },
                {
                    title: '如果商品在使用过程中出现质量问题怎么办？',
                    detail: '您收到的中奖商品都是正规渠道采购的正品，全国联保。在使用过程中的出现的任何非人为的商品质量问题及保修问题，在保修期内均可以直接联系生产厂家进行售后处理。'
                },
                {
                    title: '哪些情况下，平台不处理售后问题？',
                    detail: '若由于不可抗拒的自然原因，如地震、洪水等，造成商品配送延迟，券小二不承担相关责任。<br>若商品已签收，则说明商品配送正确无误且不存在影响使用的因素，券小二有权拒绝受理换货申请。'
                }
            ]
        }
    ];
    renderListItem(data);
    toggleListItem();
    setBtnBack();
    toggleQrCode();
});