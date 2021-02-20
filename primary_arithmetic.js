/**
 * 初级算法
 */
/**
 * 1
 * 删除排序数组中的重复项
 * 题解：首先，我们知道数组是排序数组，所以不用考虑sort，单指针，用后一个数和前一个数做比较，如果一样那就删除后一个
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let len = nums.length;
	while(len--){ 
		if(nums[len]==nums[len-1]){
			nums.splice(len,1)
		}
	}
	return nums.length;
};
//console.log(removeDuplicates([1,1,2]))
/**
 * 2
 * 买卖股票的最佳时机 II
 * 题解：贪心算法，用折线图可以观察，单指针，思路是只考虑后一个数是否大于前一个，大于就相减加到target上
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let low = prices[0],target = 0;
  for(let i=1; i<prices.length; i++){
 		if(prices[i]>low){
			target += prices[i] - low;
		}
		low = prices[i];
	}
	return target;
};
//console.log(maxProfit([7,6,4,3,1]))
/**
 * 3
 * 旋转数组
 * 题解：原地算法解决问题
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {  //补位
	let len = nums.length,y = k%len,f = 0;
	while(f++ < y){
		nums.unshift(nums[nums.length-f]);
	}
	nums.length = len;
};
//console.log(rotate([-1,-100,3,99],3))
var rotate1 = function(nums, k) {  //补位
	let len = nums.length, y = k%len;
	let a = nums.slice(0,len-y); nums.splice(0,len-y);
	for(let i=0; i<a.length; i++){
		nums.push(a[i])
	}
};
//console.log(rotate1([-1,-100,3,99],3))
var rotate2 = function(nums, k) {  //翻转
	let len = nums.length, a = new Array(len).fill(0), i=-1;
	while(++i<len){
		a[(i+k)%len] = nums[i];  
	}  //a[0+3=3%4=3] = nums[0]
	   //a[1+3=4%4=0] = nums[1]
		 //a[2+3=5%4=1] = nums[2]
		 //a[3+3=6%4=2] = nums[3]
	while(i--){
	        nums[i] = a[i]
	}
	return nums
};
//console.log(rotate2([-1,-100,3,99],3))
/**
 * 4
 * 存在重复元素
 * 题解：1、set
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let temp = new Set(nums);
	 if(temp.size<nums.length) return true
	 return false
};
var containsDuplicate1 = function(nums) {
   nums = nums.sort((a,b)=>a-b)
	 let k = nums.length;
	 while(k--){
		 if(nums[k]==nums[k-1]){
			 return true
		 }
	 }
	 return false;
};
//console.log(containsDuplicate1([1]))
/**
 * 5
 * 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   if(nums.length<3) return nums[0]
   nums = nums.sort((a,b)=>a-b)
   let k = nums.length;
   while(k-->0){
       if(nums[k]!=nums[k+1] && nums[k]!=nums[k-1]){
           return nums[k]
       }
   }
};
//console.log(singleNumber([4,1,2,1,2]))
/**
 * 6
 * 两个数组的交集 II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
		var getTarget = function(long_,short_){
			 let target = []; 
			 for (let i of short_) {
				 let idx = long_.indexOf(i);
			   if(idx > -1){
					 long_.splice(idx,1)
					 target.push(i)
				 }
			 }
			 return target;
		}
		if(nums1.length>nums2.length){
			return getTarget(nums1,nums2)
		}else{
			return getTarget(nums2,nums1)
		}	
};
//console.log(intersect([1,2,2,1],[1,1,1]))
var intersect1 = function(nums1, nums2) { //外层是长的比外层是短的耗时少
		var getTarget = function(long_,short_){
			 let target = []; 
			 for (let i of long_) {
        if(short_.length==0) return target;
				let idx = short_.indexOf(i);
			    if(idx>-1){
					 short_.splice(idx,1)
					 target.push(i)
				}
			 }
			 return target
		}
		if(nums1.length>nums2.length){
			return getTarget(nums1,nums2)
		}else{
			return getTarget(nums2,nums1)
		}	
};
/**
 * 7
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
	digits[len-1] += 1;
	while(len--){
    if(digits[len]<10) return digits;
		digits[len] = digits[len]%10;
		if(len == 0){
			digits.unshift(1)
			return digits;
		}
		digits[len-1] += 1;
	}
};
//console.log(plusOne([0,0,0]))
/**
 * 8
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	 let len = nums.length;
	 while(len--){
		 if(nums[len]==0){
			 nums.splice(len,1)
			 nums.push(0);
		 }
	 }
	 return nums
};
//console.log(moveZeroes([0,1,0,3,12]))
/**
 * 9
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = -1;
    let len = nums.length-1
    while(i++<len){
        if(i>0 && nums[i]==nums[i-1]) continue;
    		let n1 = nums[i]; //1
    	  let n2 = target - n1;  //9
    		let j=i;
    	  while(j++<len){
    				if(nums[j]==n2) return [i,j];
    		}
    }
    return [];
};
//console.log(twoSum([0,4,3,0],0))
/**
 * 10
 * 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length<=1) return s;
	 let i=-1,j=s.length;
	 while(++i<--j){
		 [s[i], s[j]] = [s[j], s[i]];
	 }
	 return s;
};
/**
 * 11
 * 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   if(x<10 && x>-10) return x;
	 let temp = x, fu = false;
	 if(temp<0){
		  fu = true;
		  temp *= -1;
	 }
	 let s = temp.toString().split('');
	 let i=-1,j=s.length;
	 while(++i<--j){
	 		 [s[i], s[j]] = [s[j], s[i]];
	 }
	 let target = Number(s.join(''));
	 if(target > Math.pow(2,31)-1 ) return 0
	 return fu?target*-1:target;
};
//console.log(reverse(0))
/**
 * 12
 * 字符串中的第一个唯一字符
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	 if(!s || s=='') return -1;
	 let que =  new Set(s),tmp = new Set([[s[0],0]]);
   let start = 0;
	 while(++start<s.length){
		 let el = s[start];
		 if(tmp.has(el)){
			 que.delete(el);
		 }else{
			 tmp.set(el,start)
		 }
	 }
	 if(que.size==0) return -1;
	 let arr = Array.from(que);
	 return tmp.get(arr[0]);
};
//console.log(firstUniqChar("aabbccddeef"))
/**
 * 13
 * 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	  s = s.replace(/[^0-9a-z\d]+/ig,'').toLowerCase();
    let left = -1, right = s.length;
    while(++left<--right){
        if(s[left]!==s[right]) return false
    }
		return true;
};
//console.log(isPalindrome("raceacar"))
/**
 * 14
 * 字符串转换整数 (atoi)
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   const getNum =function(str){
	   let num = Number(str);
	   if(!num) return 0;
	   if(num>2147483647) return 2147483647;
	   else if(num<-2147483648) return -2147483648;
	   else return num;
   }
   let nums = ['0','1','2','3','4','5','6','7','8','9'];
   let label = ['-','+'];
   let hasOther = false;
   let tarStr = '';
   for(let i=0; i<s.length; i++){
	   if(nums.indexOf(s[i])== -1 && tarStr.length>0){
		   hasOther = true;
	   }
	   if(hasOther){ return getNum(tarStr) }
	   else if(s[i]!=' '){ tarStr += s[i] }
	   if(tarStr.length==1 && nums.indexOf(tarStr)== -1 && label.indexOf(tarStr)== -1){
		   return 0;
	   }
   }
   return getNum(tarStr)
};
/**
 * 15
 * 实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle==='') return 0;
  let len = haystack.length-needle.length;
	let start = -1;
  while(start++ < len){
		let tmp = haystack.substr(start,needle.length);
		if(tmp==needle) return start;
	}
	return -1;
};
//console.log(strStr('aaaa','aa'))
/**
 * 16
 * 外观数列:给定一个正整数 n ，输出外观数列的第 n 项。
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
   let start = 1,target = '1';
	 while(++start<=n){
		  let f = '', temp = '';
			let s = -1;
			while(s++<target.length-1){
				if(f.length && f.indexOf(target[s])<0){
					temp += f.length + f[0];
					f = target[s];
				}else{
					f += target[s];
				}
				if(s == target.length-1){
					temp += f.length + target[s];
				}
			}
			target = temp;
	 }
	 return target;
};
//console.log(countAndSay(10))
/**
 * 17
 * 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	 if(strs.length==0) return '';
	 let label = strs[0];
	 for(let i=1; i<=label.length; i++){
		 let tmp = label.substring(0,i);
		 let len = strs.length;
		 let hasLong = false;
		 while(len--){
		 		if(tmp != strs[len].substring(0,i)){
					return label.substring(0,i-1)
				}
				if(strs[len].length==i){
					hasLong = true;
				}
		 }
		 if(hasLong) return tmp;
	 }
};
//console.log(longestCommonPrefix(["dog","racecar","car"]))
/**
 * 18
 * 删除链表的倒数第N个节点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   var rejectTheNum = function(list){
		 let t = n-1;
		 let result = true;
		 while(t--){
			  list = list.next;
		 }
		 if(list.next) result = false;
		 return result;
	 }
	 let newList = new ListNode(-1);
	 newList.next = head; 
	 let node = newList;
	 while(node.next){
		 let isFindEl = rejectTheNum(node.next);
		 if(isFindEl){
			  node.next = node.next.next;
        break;
		 }
		 node = node.next;
	 }
	 return newList.next;
};
/**
 * 19
 * 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(-1);
	    newList.next = l1;
    let l1_ = newList, l2_ = l2; 
	while(l1_.next){ //l1的链
        var tmp = new ListNode(-1);
            tmp.next = l2_;
        let tmp_ = tmp;
        let len = 1;
        while(l2_){ //l2的链
            if(l1_.next.val<l2_.val){
                tmp_.next = l1_.next;
                break;
            }
            tmp_ = tmp_.next;
            l2_ = l2_.next;
            len++;
        }
        if(tmp.next){
            l1_.next = tmp.next;
            while(len--){
                l1_ = l1_.next;
            }
        }
        if(!l1_.next && l2_){
            l1_.next = l2_;
            break;
        }
	}
    return newList.next;
};
/**
 * 20
 * 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	 let arr = [];
	 while(head){
		  arr.push(head.val)
	 }
	 let i = -1, j = arr.length;
	 while(++i<--j){
		  if(arr[i]!=arr[j])return false
	 }
	 return true;
};
/**
 * 21
 * 将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
}
var sortedArrayToBST = function(nums) {  //jiuwoer
  let len = nums.length;
  if(len<1) return null ;
	let i = 0,sum = 0;
	while(sum < len){
		 sum += Math.pow(2,i)
		 i++;
	}
  let target = new TreeNode();
  var getTarget = function(idx, ns, tar){
		 let mid = Math.floor(ns.length/2);
		 let left_ = ns.slice(0,mid);
		 let right_ = ns.slice(mid+1,len);
		 tar.val = ns[mid];
		 if(idx==i-1) return;
		 if(left_.length>0){
             tar.left = new TreeNode()
			 getTarget(idx+1,left_,tar.left)
		 }else if(!left_.length){
			 tar.left = null;
		 }
		 if(right_.length>0){
             tar.right = new TreeNode()
			 getTarget(idx+1,right_,tar.right)
		 } else if(!right_.length){
			 tar.right = null;
		 }
        
	}
	getTarget(0,nums,target)
	return target;
};
//console.log(sortedArrayToBST([0,1,2,3,4]))
/**
 * 22
 * 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function(n) {  //会超出时间限制，不可用
  let target = 0;
  var getTarget = function(sum){
     if(sum == n){ return target++;}
     if(sum > n ) return;
     getTarget(sum+1);  
     if(n-sum > 1){
         getTarget(sum+2); 
     } 
  }
  getTarget(0,0);
  return target
};
var climbStairs2 = function(n) { 
	if(n<=1) return n;
	let target = 1;
  let len = Math.round(n/2); 
  let dp = new Array(len+1).fill(1); 
  for(i=1;i<=len;i++){
		dp[i]= dp[i-1]*(i+1);  
		let temp = i-1;
		let sum = n-i; 
		while(temp){ 
			let loop = n-i-temp;
			sum = sum*loop; 
		  temp--;
		}
		target += sum/dp[i-1]; 
	}
	return target;
};
var climbStairs = function(n){  //最优解
	if(n<2) return n;
	let target = 1,left = 1,right = n-1;
	while(left <= right){
		if(left == right) return target+=1;
		let i = right-left > left?left:right-left;
		let top = right, bottom = i, len = i;
		while(--len){
			top *=(right-len);
			bottom *=(i-len);
		}
		target += top/bottom;
		left++;
		right--;
	}
	return target;
}
//console.log(climbStairs(0))
/**
 * 23
 * 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
	let len = s.length;
	while(len--){
		let tmp = s[len];
		if(t.indexOf(tmp)==-1) return false;
		t = t.replace(tmp,"");
	}
	return true;
};
//console.log(isAnagram("anagram","nagsram"))
/**
 * 24
 * 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	 let dp = new Array(nums.length).fill(nums[0]);
	 for(let i=1; i<nums.length; i++){
			let prev = dp[i-1], curr = nums[i]+(dp[i-2] || 0);
			if(prev>curr){
				dp[i] = prev;
			}else{
				dp[i] = curr;
			}
	 }
	 return dp[dp.length-1] || 0;
};
//console.log(rob([2,70,9]))
/**
 * 25
 * 矩阵置零
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	let m = matrix.length;
	let m_ = [], n_ = [];
	while(m--){
		let n = matrix[m].length;
		while(n--){
			if(matrix[m][n]==0){
				if(m_.indexOf(m)==-1) m_.push(m)
				if(n_.indexOf(n)==-1) n_.push(n)
			}
		}
	}
	let i = matrix.length;
	while(i--){
		if(m_.indexOf(i)>-1){
			matrix[i] = new Array(matrix[0].length).fill(0);
		}else{
			for(let j=0; j<n_.length; j++){
				matrix[i][n_[j]] = 0;
			}
		}
	}
	return matrix;
};
// console.log(setZeroes([
//   [0,1,2,0],
//   [3,4,5,2],
//   [0,3,1,5]
// ]))
/**
 * 26
 * 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let target = [];
	let len = strs.length;
	while(len--){
		let hasSame = false;
		if(target.length>0){
			for(let i=0; i<target.length; i++){
				let tmp = strs[len], tar = target[i][0];
				if(tar.length!=tmp.length) continue;
				for(let i=0; i<tar.length; i++){
					tmp = tmp.replace(tar[i],'')
				}
				if(tmp.length==0){
					target[i].push(strs[len])
					hasSame = true;
					break;
				}
			}
	  }	
		if(!hasSame) target.push([strs[len]])
	}
	return target;
};
//console.log(groupAnagrams(["stop","pots","reed","","tops","deer","opts",""]))
/**
 * 27
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	 let arr = s.split(''),tmp = [], target = [];
   for(let i=0; i<arr.length; i++){
		 let idx = tmp.indexOf(arr[i]);
		 if(idx > -1){
			 if(tmp.length > target.length){
				 target = tmp;
			 }
			 tmp = tmp.slice(idx+1);
		 }
		 tmp.push(arr[i]);
	 }
	 return tmp.length>target.length?tmp.length:target.length;
};
//console.log(lengthOfLongestSubstring("  ")); 
/**
 * 28
 * 最长回文子串：给你一个字符串 s，找到 s 中最长的回文子串。
 * 1、暴力解法两次循环；2、中心扩散；3、动态规划；4、Manacher 算法
 * @param {string} s
 * @return {string}
 */
//1、暴力解法两次循环
var longestPalindrome1 = function(s) {
    let maxLen = 1, begin = 0;   
		for(let i=0; i<s.length-1; i++){
			for(let j=i+1; j<s.length; j++){
				 if(isPalindrome1(s,i,j) && j-i+1>maxLen){
					 maxLen = j-i+1;
					 begin = i 
				 }
			}
		}
		return s.substr(begin,maxLen)
};
var isPalindrome1 = function(s,left,right) {
    while(left<right){
        if(s[left]!==s[right]) return false;
				left++;
				right--;
    }
		return true;
}
//2、中心扩散；最优解
var longestPalindrome2 = function(s) {
	let maxLen = 1, begin = 0;
	for(let i=0; i<s.length-1; i++){
		 let oddLen = isPalindrom2(s,i,i); //奇数
		 let evenLen = isPalindrom2(s,i,i+1); //偶数
		 let theLen = Math.max(oddLen,evenLen);
		 if(theLen>maxLen){
			 maxLen = theLen;
			 begin = i - Math.floor((maxLen-1)/2)
		 }
	}
	return s.substr(begin,maxLen);
}
var isPalindrom2 = function(str,left,right){ //2,3
	while(left>= 0 && right<str.length){
		if(str[left]!=str[right]) break;
		else{
			left--;
			right++;
		}
	}
	return right-left-1;
}
//3、动态规划；优化暴力解法
var longestPalindrome3 = function(s) {
	 let len = s.length;
	 let dp = new Array(len).fill().map(item=>[]);
	 for(let i=0; i<len; i++){
		 dp[i][i] = true;
	 }
	 let maxLen = 1; begin = 0;
	 for(let j=1; j<len; j++){
		  for(let i=0; i<j; i++){
				if(s[j]!=s[i]){
					dp[i][j] = false;
				}else{
					if( j-i < 3){ 
						dp[i][j] = true;
					}else{
						dp[i][j] = dp[i+1][j-1]
					}
				}
				if(dp[i][j] && (j-i+1)>maxLen){
					 maxLen = j-i+1;;
					 begin = i;
				}
			}
	 }
	 return s.substr(begin,maxLen)
}
//console.log(longestPalindrome3("babab"))
/**
 * 29
 * 递增的三元子序列：给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	let dp = new Array(nums.length).fill(1);//.map((item,idx)=>idx);
	for(let i=1; i<nums.length; i++){
		let maxNum = nums[i];
		let tmp = 0;
		for(let j=i-1; j>=0; j--){
			if(nums[j] < maxNum && dp[j]>tmp){
				  tmp = dp[j];
			}
			if(tmp==2){return true}
		}
		dp[i] += tmp;
	}
	return false;
};
//console.log(increasingTriplet([2,1,5,0,4,6]))
