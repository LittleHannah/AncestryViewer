<template>
  <div id="chart-container" style="height: 1800px;width:100%">Hello World</div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'AncestryViewer',
  mounted () {
    this.data = this.wrapData(this.raw, this.categories, this.types)
    this.initChart()
  },
  data () {
    return {
      categories: [
        'True Ancestry Hap 0',
        'Predict Ancestry Hap 0',
        'True Ancestry Hap 1',
        'Predict Ancestry Hap 1',
        'True Ancestry Hap 2',
        'Predict Ancestry Hap 2',
        'True Ancestry Hap 3',
        'Predict Ancestry Hap 3',
        'True Ancestry Hap 4',
        'Predict Ancestry Hap 4',
        'True Ancestry Hap 5',
        'Predict Ancestry Hap 5'
      ],
      title: 'Ancestry Viewer',
      startIndex: 0,
      types: [
        { name: 'YRI', color: '#7b9ce1' },
        { name: 'CEU', color: '#dc77dc' }
      ],
      raw: [['True Ancestry Hap 0', 'YRI', 0, 4096, 4096], ['Predict Ancestry Hap 0', 'YRI', 0, 4096, 4096], ['True Ancestry Hap 0', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 0', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 0', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 0', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 0', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 0', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 0', 'CEU', 16384, 20480, 4096], ['Predict Ancestry Hap 0', 'CEU', 16384, 20480, 4096], ['True Ancestry Hap 0', 'YRI', 20480, 24576, 4096], ['Predict Ancestry Hap 0', 'YRI', 20480, 24576, 4096], ['True Ancestry Hap 0', 'YRI', 24576, 28672, 4096], ['Predict Ancestry Hap 0', 'YRI', 24576, 28672, 4096], ['True Ancestry Hap 0', 'YRI', 28672, 32768, 4096], ['Predict Ancestry Hap 0', 'YRI', 28672, 32768, 4096], ['True Ancestry Hap 0', 'YRI', 32768, 36864, 4096], ['Predict Ancestry Hap 0', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 0', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 0', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 0', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 0', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 0', 'YRI', 45056, 49152, 4096], ['Predict Ancestry Hap 0', 'YRI', 45056, 49152, 4096], ['True Ancestry Hap 0', 'YRI', 49152, 53248, 4096], ['Predict Ancestry Hap 0', 'YRI', 49152, 53248, 4096], ['True Ancestry Hap 0', 'YRI', 53248, 57344, 4096], ['Predict Ancestry Hap 0', 'YRI', 53248, 57344, 4096], ['True Ancestry Hap 0', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 0', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 0', 'CEU', 61440, 65536, 4096], ['Predict Ancestry Hap 0', 'YRI', 61440, 65536, 4096], ['True Ancestry Hap 0', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 0', 'CEU', 65536, 69632, 4096], ['True Ancestry Hap 0', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 0', 'YRI', 69632, 73728, 4096], ['True Ancestry Hap 0', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 0', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 0', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 0', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 0', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 0', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 0', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 0', 'YRI', 86016, 90112, 4096], ['True Ancestry Hap 0', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 0', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 0', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 0', 'YRI', 94208, 98304, 4096], ['True Ancestry Hap 1', 'YRI', 0, 4096, 4096], ['Predict Ancestry Hap 1', 'YRI', 0, 4096, 4096], ['True Ancestry Hap 1', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 1', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 1', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 1', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 1', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 1', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 1', 'YRI', 16384, 20480, 4096], ['Predict Ancestry Hap 1', 'YRI', 16384, 20480, 4096], ['True Ancestry Hap 1', 'YRI', 20480, 24576, 4096], ['Predict Ancestry Hap 1', 'YRI', 20480, 24576, 4096], ['True Ancestry Hap 1', 'YRI', 24576, 28672, 4096], ['Predict Ancestry Hap 1', 'YRI', 24576, 28672, 4096], ['True Ancestry Hap 1', 'YRI', 28672, 32768, 4096], ['Predict Ancestry Hap 1', 'YRI', 28672, 32768, 4096], ['True Ancestry Hap 1', 'YRI', 32768, 36864, 4096], ['Predict Ancestry Hap 1', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 1', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 1', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 1', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 1', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 1', 'YRI', 45056, 49152, 4096], ['Predict Ancestry Hap 1', 'YRI', 45056, 49152, 4096], ['True Ancestry Hap 1', 'YRI', 49152, 53248, 4096], ['Predict Ancestry Hap 1', 'YRI', 49152, 53248, 4096], ['True Ancestry Hap 1', 'YRI', 53248, 57344, 4096], ['Predict Ancestry Hap 1', 'YRI', 53248, 57344, 4096], ['True Ancestry Hap 1', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 1', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 1', 'YRI', 61440, 65536, 4096], ['Predict Ancestry Hap 1', 'YRI', 61440, 65536, 4096], ['True Ancestry Hap 1', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 1', 'CEU', 65536, 69632, 4096], ['True Ancestry Hap 1', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 1', 'YRI', 69632, 73728, 4096], ['True Ancestry Hap 1', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 1', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 1', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 1', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 1', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 1', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 1', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 1', 'YRI', 86016, 90112, 4096], ['True Ancestry Hap 1', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 1', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 1', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 1', 'CEU', 94208, 98304, 4096], ['True Ancestry Hap 2', 'YRI', 0, 4096, 4096], ['Predict Ancestry Hap 2', 'YRI', 0, 4096, 4096], ['True Ancestry Hap 2', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 2', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 2', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 2', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 2', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 2', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 2', 'YRI', 16384, 20480, 4096], ['Predict Ancestry Hap 2', 'YRI', 16384, 20480, 4096], ['True Ancestry Hap 2', 'YRI', 20480, 24576, 4096], ['Predict Ancestry Hap 2', 'CEU', 20480, 24576, 4096], ['True Ancestry Hap 2', 'YRI', 24576, 28672, 4096], ['Predict Ancestry Hap 2', 'YRI', 24576, 28672, 4096], ['True Ancestry Hap 2', 'YRI', 28672, 32768, 4096], ['Predict Ancestry Hap 2', 'YRI', 28672, 32768, 4096], ['True Ancestry Hap 2', 'CEU', 32768, 36864, 4096], ['Predict Ancestry Hap 2', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 2', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 2', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 2', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 2', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 2', 'YRI', 45056, 49152, 4096], ['Predict Ancestry Hap 2', 'CEU', 45056, 49152, 4096], ['True Ancestry Hap 2', 'CEU', 49152, 53248, 4096], ['Predict Ancestry Hap 2', 'CEU', 49152, 53248, 4096], ['True Ancestry Hap 2', 'CEU', 53248, 57344, 4096], ['Predict Ancestry Hap 2', 'CEU', 53248, 57344, 4096], ['True Ancestry Hap 2', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 2', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 2', 'YRI', 61440, 65536, 4096], ['Predict Ancestry Hap 2', 'YRI', 61440, 65536, 4096], ['True Ancestry Hap 2', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 2', 'YRI', 65536, 69632, 4096], ['True Ancestry Hap 2', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 2', 'YRI', 69632, 73728, 4096], ['True Ancestry Hap 2', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 2', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 2', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 2', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 2', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 2', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 2', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 2', 'CEU', 86016, 90112, 4096], ['True Ancestry Hap 2', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 2', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 2', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 2', 'YRI', 94208, 98304, 4096], ['True Ancestry Hap 3', 'YRI', 0, 4096, 4096], ['Predict Ancestry Hap 3', 'YRI', 0, 4096, 4096], ['True Ancestry Hap 3', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 3', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 3', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 3', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 3', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 3', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 3', 'YRI', 16384, 20480, 4096], ['Predict Ancestry Hap 3', 'YRI', 16384, 20480, 4096], ['True Ancestry Hap 3', 'YRI', 20480, 24576, 4096], ['Predict Ancestry Hap 3', 'YRI', 20480, 24576, 4096], ['True Ancestry Hap 3', 'YRI', 24576, 28672, 4096], ['Predict Ancestry Hap 3', 'CEU', 24576, 28672, 4096], ['True Ancestry Hap 3', 'YRI', 28672, 32768, 4096], ['Predict Ancestry Hap 3', 'YRI', 28672, 32768, 4096], ['True Ancestry Hap 3', 'YRI', 32768, 36864, 4096], ['Predict Ancestry Hap 3', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 3', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 3', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 3', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 3', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 3', 'CEU', 45056, 49152, 4096], ['Predict Ancestry Hap 3', 'CEU', 45056, 49152, 4096], ['True Ancestry Hap 3', 'YRI', 49152, 53248, 4096], ['Predict Ancestry Hap 3', 'YRI', 49152, 53248, 4096], ['True Ancestry Hap 3', 'CEU', 53248, 57344, 4096], ['Predict Ancestry Hap 3', 'YRI', 53248, 57344, 4096], ['True Ancestry Hap 3', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 3', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 3', 'CEU', 61440, 65536, 4096], ['Predict Ancestry Hap 3', 'CEU', 61440, 65536, 4096], ['True Ancestry Hap 3', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 3', 'YRI', 65536, 69632, 4096], ['True Ancestry Hap 3', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 3', 'YRI', 69632, 73728, 4096], ['True Ancestry Hap 3', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 3', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 3', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 3', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 3', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 3', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 3', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 3', 'YRI', 86016, 90112, 4096], ['True Ancestry Hap 3', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 3', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 3', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 3', 'YRI', 94208, 98304, 4096], ['True Ancestry Hap 4', 'CEU', 0, 4096, 4096], ['Predict Ancestry Hap 4', 'CEU', 0, 4096, 4096], ['True Ancestry Hap 4', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 4', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 4', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 4', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 4', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 4', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 4', 'YRI', 16384, 20480, 4096], ['Predict Ancestry Hap 4', 'YRI', 16384, 20480, 4096], ['True Ancestry Hap 4', 'YRI', 20480, 24576, 4096], ['Predict Ancestry Hap 4', 'YRI', 20480, 24576, 4096], ['True Ancestry Hap 4', 'YRI', 24576, 28672, 4096], ['Predict Ancestry Hap 4', 'YRI', 24576, 28672, 4096], ['True Ancestry Hap 4', 'YRI', 28672, 32768, 4096], ['Predict Ancestry Hap 4', 'YRI', 28672, 32768, 4096], ['True Ancestry Hap 4', 'YRI', 32768, 36864, 4096], ['Predict Ancestry Hap 4', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 4', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 4', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 4', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 4', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 4', 'YRI', 45056, 49152, 4096], ['Predict Ancestry Hap 4', 'CEU', 45056, 49152, 4096], ['True Ancestry Hap 4', 'YRI', 49152, 53248, 4096], ['Predict Ancestry Hap 4', 'YRI', 49152, 53248, 4096], ['True Ancestry Hap 4', 'YRI', 53248, 57344, 4096], ['Predict Ancestry Hap 4', 'YRI', 53248, 57344, 4096], ['True Ancestry Hap 4', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 4', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 4', 'CEU', 61440, 65536, 4096], ['Predict Ancestry Hap 4', 'CEU', 61440, 65536, 4096], ['True Ancestry Hap 4', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 4', 'YRI', 65536, 69632, 4096], ['True Ancestry Hap 4', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 4', 'YRI', 69632, 73728, 4096], ['True Ancestry Hap 4', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 4', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 4', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 4', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 4', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 4', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 4', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 4', 'YRI', 86016, 90112, 4096], ['True Ancestry Hap 4', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 4', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 4', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 4', 'YRI', 94208, 98304, 4096], ['True Ancestry Hap 5', 'YRI', 0, 4096, 4096], ['Predict Ancestry Hap 5', 'YRI', 0, 4096, 4096], ['True Ancestry Hap 5', 'YRI', 4096, 8192, 4096], ['Predict Ancestry Hap 5', 'YRI', 4096, 8192, 4096], ['True Ancestry Hap 5', 'YRI', 8192, 12288, 4096], ['Predict Ancestry Hap 5', 'YRI', 8192, 12288, 4096], ['True Ancestry Hap 5', 'YRI', 12288, 16384, 4096], ['Predict Ancestry Hap 5', 'YRI', 12288, 16384, 4096], ['True Ancestry Hap 5', 'YRI', 16384, 20480, 4096], ['Predict Ancestry Hap 5', 'CEU', 16384, 20480, 4096], ['True Ancestry Hap 5', 'CEU', 20480, 24576, 4096], ['Predict Ancestry Hap 5', 'YRI', 20480, 24576, 4096], ['True Ancestry Hap 5', 'CEU', 24576, 28672, 4096], ['Predict Ancestry Hap 5', 'CEU', 24576, 28672, 4096], ['True Ancestry Hap 5', 'CEU', 28672, 32768, 4096], ['Predict Ancestry Hap 5', 'CEU', 28672, 32768, 4096], ['True Ancestry Hap 5', 'YRI', 32768, 36864, 4096], ['Predict Ancestry Hap 5', 'YRI', 32768, 36864, 4096], ['True Ancestry Hap 5', 'YRI', 36864, 40960, 4096], ['Predict Ancestry Hap 5', 'YRI', 36864, 40960, 4096], ['True Ancestry Hap 5', 'YRI', 40960, 45056, 4096], ['Predict Ancestry Hap 5', 'YRI', 40960, 45056, 4096], ['True Ancestry Hap 5', 'YRI', 45056, 49152, 4096], ['Predict Ancestry Hap 5', 'YRI', 45056, 49152, 4096], ['True Ancestry Hap 5', 'YRI', 49152, 53248, 4096], ['Predict Ancestry Hap 5', 'YRI', 49152, 53248, 4096], ['True Ancestry Hap 5', 'YRI', 53248, 57344, 4096], ['Predict Ancestry Hap 5', 'YRI', 53248, 57344, 4096], ['True Ancestry Hap 5', 'YRI', 57344, 61440, 4096], ['Predict Ancestry Hap 5', 'YRI', 57344, 61440, 4096], ['True Ancestry Hap 5', 'YRI', 61440, 65536, 4096], ['Predict Ancestry Hap 5', 'YRI', 61440, 65536, 4096], ['True Ancestry Hap 5', 'YRI', 65536, 69632, 4096], ['Predict Ancestry Hap 5', 'CEU', 65536, 69632, 4096], ['True Ancestry Hap 5', 'YRI', 69632, 73728, 4096], ['Predict Ancestry Hap 5', 'CEU', 69632, 73728, 4096], ['True Ancestry Hap 5', 'YRI', 73728, 77824, 4096], ['Predict Ancestry Hap 5', 'YRI', 73728, 77824, 4096], ['True Ancestry Hap 5', 'YRI', 77824, 81920, 4096], ['Predict Ancestry Hap 5', 'YRI', 77824, 81920, 4096], ['True Ancestry Hap 5', 'YRI', 81920, 86016, 4096], ['Predict Ancestry Hap 5', 'YRI', 81920, 86016, 4096], ['True Ancestry Hap 5', 'YRI', 86016, 90112, 4096], ['Predict Ancestry Hap 5', 'YRI', 86016, 90112, 4096], ['True Ancestry Hap 5', 'YRI', 90112, 94208, 4096], ['Predict Ancestry Hap 5', 'YRI', 90112, 94208, 4096], ['True Ancestry Hap 5', 'YRI', 94208, 98304, 4096], ['Predict Ancestry Hap 5', 'YRI', 94208, 98304, 4096]]
    }
  },
  methods: {
    wrapData (rawData, categories, types) {
      const data = rawData.map((data, index) => {
        const [category, typename, start, end] = data
        const typeItem = types.filter((element) => {
          if (element.name === typename) return true
        })
        return {
          name: typeItem[0].name,
          value: [categories.indexOf(category), start, end, end - start],
          itemStyle: {
            color: typeItem[0].color
          }
        }
      })
      return data
    },
    renderItem (params, api) {
      let categoryIndex = api.value(0)
      let start = api.coord([api.value(1), categoryIndex])
      let end = api.coord([api.value(2), categoryIndex])
      let height = api.size([0, 1])[1] * 0.6
      let rectShape = echarts.graphic.clipRectByRect(
        {
          x: start[0],
          y: start[1] - height / 2,
          width: end[0] - start[0],
          height: height
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height
        }
      )
      return (
        rectShape && {
          type: 'rect',
          transition: ['shape'],
          shape: rectShape,
          style: api.style()
        }
      )
    },
    initChart () {
      const startIndex = this.startIndex
      const myChart = echarts.init(document.getElementById('chart-container'))
      const option = {
        tooltip: {
          formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[1] + ' - ' + params.value[2]
          }
        },
        title: {
          text: this.title,
          left: 'center'
        },
        dataZoom: [
          {
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 400,
            labelFormatter: ''
          },
          {
            type: 'inside',
            filterMode: 'weakFilter'
          }
        ],
        grid: {
          height: 300
        },
        xAxis: {
          min: startIndex,
          scale: true,
          axisLabel: {
            formatter: function (val) {
              return Math.max(0, val - startIndex)
            }
          }
        },
        yAxis: {
          data: this.categories
        },
        series: [
          {
            type: 'custom',
            renderItem: this.renderItem,
            itemStyle: {
              opacity: 0.8
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: this.data
          }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
