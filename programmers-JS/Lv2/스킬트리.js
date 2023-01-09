function solution(skill, skill_trees) {
  let answer = 0;
  const skillArr = skill.split("");
  const skillTreeArr = skill_trees.map((skill_tree) => skill_tree.split(""));

  skillTreeArr.forEach((skillTree) => {
    const skillTreeLength = skillTree.length;
    let skillTreeIndex = 0;
    let isPossible = true;
    for (let i = 0; i < skillTreeLength; i++) {
      if (skillArr.includes(skillTree[i])) {
        if (skillArr[skillTreeIndex] === skillTree[i]) {
          skillTreeIndex++;
        } else {
          isPossible = false;
          break;
        }
      }
    }
    if (isPossible) {
      answer++;
    }
  });

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
