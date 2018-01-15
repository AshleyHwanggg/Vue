<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>商城管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div style="margin: 20px 0">
      <el-button size='mini' icon='el-icon-circle-plus-outline' plain>新增</el-button>
      <el-button size='mini' icon='el-icon-circle-check' plain>全选</el-button>
      <el-button size='mini' icon='el-icon-delete' plain>删除</el-button>
      <el-input style='width:160px;float:right;' size='mini' placeholder="请输入内容" suffix-icon="el-icon-search" v-model='productListQuery.searchvalue' @blur="getProductList">
      </el-input>
    </div>

    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column label="标题">      
      <template slot-scope="scope">
         <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"> 
          <div slot="content">
            <img :src="scope.row.imgurl" alt="图片预览" style="width:200px;">
          </div>       
        <router-link :to="{name:'productCtEdit',params:{id:scope.row.id}}">{{ scope.row.title }}</router-link>
        </el-tooltip>
        </template> 
      </el-table-column>
  
      <el-table-column prop="categoryname" label="所属类别" width="100">
      </el-table-column>
      <el-table-column prop="stock_quantity" label="库存" show-overflow-tooltip width="100">
      </el-table-column>
      <el-table-column prop="market_price" label="市场价" show-overflow-tooltip width="100">
      </el-table-column>
      <el-table-column prop="sell_price" label="销售价" show-overflow-tooltip width="100">
      </el-table-column>
      <el-table-column label="属性" show-overflow-tooltip width="100">
        <template slot-scope="scope">
          <i :class="['el-icon-picture',scope.row.is_slide == 1?'active':'']" 
          @click="editStatus(scope.row.id,'is_slide',scope.row.is_slide == 1?false:true)"></i>
          <i :class="['el-icon-upload',scope.row.is_top == 1?'active':'']"
           @click="editStatus(scope.row.id,'is_top',scope.row.is_top == 1?false:true)"></i>
          <i :class="['el-icon-star-on',scope.row.is_hot == 1?'active':'']"
          @click="editStatus(scope.row.id,'is_hot',scope.row.is_hot == 1?false:true)"></i>
        </template>
      </el-table-column>
      <el-table-column label="操作" show-overflow-tooltip width="100">
        <template slot-scope="scope">
          <router-link :to="{name:'productCtEdit',params:{id:2}}">修改</router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          id: 103,
          title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
          is_top: 1,
          is_hot: 1,
          is_slide: 1,
          categoryname: "男装",
          img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          imgurl:
            "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          goods_no: "NZ0000000002",
          stock_quantity: 200,
          market_price: 1000,
          sell_price: 800
        },
        {
          id: 103,
          title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
          is_top: 1,
          is_hot: 1,
          is_slide: 1,
          categoryname: "男装",
          img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          imgurl:
            "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
          goods_no: "NZ0000000002",
          stock_quantity: 200,
          market_price: 1000,
          sell_price: 800
        }
      ],
      productListQuery:{
        pageIndex:1,
        pageSize:10,
        searchvalue:''
      }
    };
  },
  methods: {
    getProductList(){
      this.$http.get(this.$api.gsList,{params:this.productListQuery}).then(res=>{
        // console.log(res);
        this.tableData3 = res.data.message;
      })
    },

    editStatus(id,status,newStatus){
      this.tableData3.filter(product=>product.id == id)[0][status]=newStatus?"1":"0";
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  created(){
    this.getProductList();
  }
};
</script>

<style scoped lang="less">
a{
  text-decoration: none;
  color: #267cb7;
}
/* 先统一设置icon样式 */
[class^=el-icon]{
  color:#ccc;
  &.active{
    color:#3a3a3a;
  }
}
</style>