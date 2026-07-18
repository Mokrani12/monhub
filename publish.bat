cd C:\Users\mokra\monhub

# 1) Connecte-toi a GitHub (interactif, une seule fois)
gh auth login

# 2) Cree le depot public sur GitHub (gratuit)
gh repo create monhub --public --source=. --remote=origin --push

# C'est tout. Ton site sera ensuite activable dans :
# GitHub > monhub > Settings > Pages > Source: main / root
