#include<bits/stdc++.h>
#define N 10005
#define SZ 100
using namespace std;
struct M
{
  int *x,y;
}st[100005];
int n,m,u[N],v[N],p[N],q[N],dep[N],f1[N],f2[N],Ans[N];
int top,fa[N],sz[N];
vector<int>s1[N],s2[N];
void ps(int &x)
{
  st[++top]=(M){&x,x};
}
int Get(int x)
{
  return fa[x]==x?x:Get(fa[x]);
}
void add(int x,int y)
{
  int u=Get(x),v=Get(y);
  if (u!=v)
  {
    if (sz[u]<sz[v]) swap(u,v);
    ps(fa[v]);ps(sz[u]);
    fa[v]=u;sz[u]=sz[u]+sz[v];
  }
}
void re(int tmp)
{
  while(top>tmp)
  {
    *st[top].x=st[top].y;
    top--;
  }
}
void solve(int x,int y)
{
  int tmp=top;
  add(p[x],q[x]);
  if (Ans[x]==-1)
  {
    int tmp1=top;
    for (int t=x;t!=y;t=f1[t])
      add(u[t],v[t]);
    Ans[x]=m-top/2;
    re(tmp1);
  }
  for (int i=0;i<s2[x].size();i++)
  {
    solve(s2[x][i],y);
  }
  re(tmp);
}
void dfs(int x)
{
  int tmp=top;
  add(u[x],v[x]);
  dep[x]=1;
  for (int i=0;i<s1[x].size();i++)
  {
    dfs(s1[x][i]);
    dep[x]=max(dep[x],dep[s1[x][i]]+1);
  }
  Ans[x]=-1;
  if (dep[x]==SZ||x==1)
  {
    solve(1,x);
    dep[x]=0;
  }
  re(tmp);
}
void work()
{
  scanf("%d%d",&n,&m);
  for (int i=1;i<=n;i++)
  {
    vector<int>tmp,tmp1;
    tmp.swap(s1[i]);
    tmp1.swap(s2[i]);
    Ans[i]=0;
  }
  for (int i=1;i<=m;i++)
    fa[i]=i,sz[i]=1;
  for (int i=1;i<=n;i++)
    scanf("%d%d",&u[i],&v[i]);
  for (int i=2;i<=n;i++)
  {
    int x,y;
    scanf("%d%d",&x,&y);
    s1[f1[y]=x].push_back(y);
  }
  for (int i=1;i<=n;i++)
    scanf("%d%d",&p[i],&q[i]);
  for (int i=2;i<=n;i++)
  {
    int x,y;
    scanf("%d%d",&x,&y);
    s2[f2[y]=x].push_back(y);
  }
  dfs(1);
  for (int i=1;i<=n;i++)
    printf("%d\n",Ans[i]);
}
int main()
{
  int T;
  scanf("%d",&T);
  while(T--)
    work();
}