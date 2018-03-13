<template>
    <div class="tabs">
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                v-for="(item) in editableTabs2"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{item.content}}
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { basicDataItems, systermSettings, concatTabs } from "@/api/data";
import { mapState } from "vuex";
export default {
  data() {
    return {
      editableTabsValue2: "home",
      editableTabs2: [
        {
          title: "后台首页",
          name: "home"
        }
      ],
      itemTabs: ""
    };
  },
  methods: {
    addTab(item) {
      this.editableTabs2.push({
        title: item.name,
        name: item.id
      });
      this.editableTabsValue2 = item.id;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    refreshCurrentView() {
      this.itemTabs = concatTabs();
      let activePath = this.$route.path.substring(1);
      let activeTab = this.itemTabs.filter(item => item.id == activePath)[0];
      if (activeTab && activeTab.id != "home") {
        this.editableTabs2.push({
          title: activeTab.name,
          name: activeTab.id
        });
        this.editableTabsValue2 = activeTab.id;
      }
    }
  },
  watch: {
    editableTabsValue2(newValue, oldValue) {
      this.$store.state.defaultActive = newValue;
    },
    $route(to, from) {
      let path = to.path.substring(1);
      this.itemTabs = concatTabs();
      let activeTab = this.itemTabs.filter(item => item.id == path)[0];

      let isHasTab = this.editableTabs2.some(item => item.name == path);
      if (!isHasTab) {
        this.addTab(activeTab);
      }
      this.editableTabsValue2 = path;
    }
  },
  created() {
    this.refreshCurrentView()
  },
  computed: mapState(["defaultActive"])
};
</script>

<style>
#tab-home .el-icon-close {
  display: none;
}
.el-tabs__header {
  margin: 0;
}
</style>