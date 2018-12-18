class Autofiles:
    def createfile(self):
        filename      = input("write file name :")
        fileExtention = input("file extention  :")
        currentfilename = str(filename+ "."+fileExtention)
        if open(currentfilename, "w"):
            print("file crated successfully")
            PutContent = input("enter text that append in file = ")
            print(PutContent)
            with open(currentfilename, 'a') as the_file:
                the_file.write(PutContent +"\n")
obj = Autofiles()
obj.createfile()
