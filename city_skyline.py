building =[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]

output_array=[]

mini_array=[]

for x in range(len(building)):
    
    if x+1 == len(building):
        print(building[x])
        output_array.append([building[x][1],0])
        break

    if building[x][1] < building[x+1][0]:
        # print(building[x+1][0])
        output_array.append([building[x][1],0])

            

    if building[x][1] > building[x+1][0]:
        output_array.append([building[x][0],building[x][2]])

    if building[x][1] > building[x+1][0] and building[x][2] > building[x+1][2]:
        output_array.append([building[x][1],building[x+1][2]])

print(output_array)
  
    